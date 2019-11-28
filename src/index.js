import '@babel/polyfill';
import express from 'express';

const app = express();
app.set('port', process.env.PORT || 3000);

async function main(){
    await app.listen(app.get('port'));
    console.log(`Server runnig in http://localhost:${app.get('port')}/`);
}

main();