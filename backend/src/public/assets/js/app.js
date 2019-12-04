"use strict";

const el = e => document.querySelector(e);
const cl = c => console.log(c);

const sendMessage = () => {
    const message = el('#message').value;
    socket.emit(message);
};