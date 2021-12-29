const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

//pre save exec
userSchema.pre('save', async function (next) {
    //not modified next
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function(confirmPassword){
    return await bcrypt.compare(confirmPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
