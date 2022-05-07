const mongoose = require("mongoose");

const user = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    friends: [String], 
});

const Users = mongoose.model('Users', user);

export default Users;