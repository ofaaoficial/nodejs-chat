import '@babel/polyfill';
import express, {static as st} from 'express';
import indexRoutes from './router/index.router';
import exphbs from 'express-handlebars';
import path from 'path';
import connect from './config/database';
import http from 'http';
import socket from 'socket.io';

connect();

const app = express();
const server = http.createServer(app);
const io = socket(server);
require('./config/socket.io')(io);


app.set('port', process.env.PORT || 2323);

app.use(indexRoutes);
app.set('views', path.join(__dirname, 'views'));

app.use(st(path.join(__dirname, 'public')));

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

async function main(){
    await server.listen(app.get('port'));
    console.log(`Server running in http://localhost:${app.get('port')}/`);
}

main();