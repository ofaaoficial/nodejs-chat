import '@babel/polyfill';
import express from 'express';
import socketio from 'socket.io';
import http from 'http';
import indexRouter from './router/index.router';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

import {addUser, removeUser, getUser, getUsersInRoom, users} from './config/Users';

app.set('port', process.env.PORT || 5000);

app.use(indexRouter);

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

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {
            user: user.name,
            text: message
        });

        callback();
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
});

async function main() {
    await server.listen(app.get('port'));
    console.log(`Server has started on http://localhost:${app.get('port')}/`);
}

main();