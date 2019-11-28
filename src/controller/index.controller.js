import Chat from '../models/Chat';

export async function index(req, res){
    const messages = await Chat.find();
    console.log(messages);
    res.json(messages);
}