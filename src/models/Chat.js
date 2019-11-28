import mongoose, { Schema } from 'mongoose';

const ChatSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String
    }
});

export default mongoose.model('Chat', ChatSchema);