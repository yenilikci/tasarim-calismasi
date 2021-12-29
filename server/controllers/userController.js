const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const register = asyncHandler(async (req, res) => {
    const {name, email, password, picture} = req.body;

    //user check
    const userExists = await User.findOne({email});
    if (userExists) {
        res.status(400);
        throw new Error("User Already Exists");
    }

    //user create
    const user = await User.create({
        name,
        email,
        password,
        picture
    });

    //success
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            picture: user.picture
        })
    } else { //error
        res.status(400);
        throw new Error("There Is An Error")
    }

});

const login = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    //find user
    const user = await User.findOne({ email });

    //if user exists and password is correct
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            picture: user.picture
        });
    } else { //not found
        res.status(400);
        throw new Error("Invalid Email Or Password!");
    }
});

module.exports = {register, login}
