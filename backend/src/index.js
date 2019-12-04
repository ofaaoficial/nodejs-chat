import '@babel/polyfill';
import express from 'express';
import socketio from 'socket.io';
import http from 'http';
import indexRouter from './router/index.router';

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.set('port', process.env.PORT || 5000);

app.use(indexRouter);

async function main(){
    await server.listen(app.get('port'));
    console.log(`Server has started on http://localhost:${app.get('port')}/`);
}

main();