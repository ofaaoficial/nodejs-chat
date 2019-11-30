import Chat from '../models/Chat';

export async function index(req, res){
    const data = await Chat.find();
    const messages = data.length > 0 ? data : [
        {
            message: "Message 1",
        },
        {
            message: "Message 2",
        },
    ];

    res.render('index/index',{ messages });
}