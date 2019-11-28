import '@babel/polyfill';
import express from 'express';
import indexRoutes from './router/index.router';

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(indexRoutes);

async function main(){
    await app.listen(app.get('port'));
    console.log(`Server runnig in http://localhost:${app.get('port')}/`);
}

main();