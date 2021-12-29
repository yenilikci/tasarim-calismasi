const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const {mongoose} = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    picture: {
        type: String,
        required: true,
        default: "https://placeimg.com/640/480/any"
    }
}, {
    timestamp: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
