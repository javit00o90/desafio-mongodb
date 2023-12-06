import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    user: {
        type: String, // Puedes cambiar el tipo según tus necesidades
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const Message = mongoose.model('Message', messageSchema);

export default Message;