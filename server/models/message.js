const mongoose = require("mongoose");

const message = new mongoose.Schema({
    body:{
        type: String,
        required: true,
    },
    time: {
        type: Date,
        default: new Date(),
    },
    like: {
        type: Boolean,
        default: false,
    },
    by: [String], 
});

const Messages = mongoose.model('Messages', message);

export default Messages;