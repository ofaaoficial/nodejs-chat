module.exports = io => {
    const messages = [];
    io.on('connection', socket => {

        socket.on('message', data => {
            message.push(data);
            io.emit('message', data);
        })
    });
};