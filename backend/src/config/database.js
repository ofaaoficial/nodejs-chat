import mongoose from 'mongoose';

export async function connect(){
    await mongoose.connect("mongodb://localhost/nodejs-chat",{
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    console.log(" DB si connected ");
}

export default connect;