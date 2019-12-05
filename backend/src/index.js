import '@babel/polyfill';
import express from 'express';
import socketio from 'socket.io';
import http from 'http';
import indexRouter from './router/index.router';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

import {addUser, removeUser, getUser, getUsersInRoom, users} from './config/Users';

app.set('port', process.env.PORT || 5000);

app.use(indexRouter);
app.use(cors());

io.on('connection', socket => {
    console.log('connected');

    socket.on('join', ({name, room}, callback) => {

        const {error, user} = addUser({id: socket.id, name, room});

        if (error) return callback(error);

        socket.emit('message', {
            user: 'admin',
            text: `Welcome to the room ${user.name}`
        });

        socket.broadcast.to(user.room).emit('message', {
            user: 'admin',
            text: `${user.name} has joined!`
        });

        socket.join(user.room);

        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room)
        });

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {
            user: user.name,
            text: message
        });

        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room)
        });

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if(user)
            io.to(user.room).emit('message',{
                user: 'admin',
                text: `${user.name} has left.`
            });
        console.log('User disconnected');
    })
});

async function main() {
    await server.listen(app.get('port'));
    console.log(`Server has started on http://localhost:${app.get('port')}/`);
}

main();