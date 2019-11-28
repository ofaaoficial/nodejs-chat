import '@babel/polyfill';
import express from 'express';
import indexRoutes from './router/index.router';
import exphbs from 'express-handlebars';
import path from 'path';

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(indexRoutes);
app.set('views', path.join(__dirname, 'views'));

console.log();

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

async function main(){
    await app.listen(app.get('port'));
    console.log(`Server running in http://localhost:${app.get('port')}/`);
}

main();