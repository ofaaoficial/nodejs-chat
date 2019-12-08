import {addUser, getUser, getUsersInRoom, removeUser} from "../config/Users";

export default io => {
    io.on('connection', socket => {
        console.log('connected');

        socket.on('join', ({name, room}, callback) => {

            const {error, user} = addUser({id: socket.id, name, room});

            if (error) return callback(error);

            socket.emit('message', {
                user: 'admin',
                text: `Bienvenido a la sala ${user.name}!`
            });

            socket.broadcast.to(user.room).emit('message', {
                user: 'admin',
                text: `${user.name} ingreso a la sala!`
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

            if (user)
                io.to(user.room).emit('message', {
                    user: 'admin',
                    text: `${user.name} ha salido.`
                });
            console.log('Un usuario se desconecto.');
        })
    });
}