const Command = require('../models/commandModel');
const asyncHandler = require("express-async-handler");

const getCommands = asyncHandler(async (req, res) => {
    const commands = await Command.find({user: req.user._id});
    res.json(commands);
});

const createCommand = asyncHandler(async (req, res) => {
    const {title, m1, m2, m3, m4, m5, m6, category} = req.body;

    if (!title || !m1 || !m2 || !m3 || !m4 || !m5 || !m6 || !category) {
        res.status(400);
        throw new Error("Please Fill All The Fields");
    } else {
        const command = new Command({user: req.user._id, title, m1, m2, m3, m4, m5, m6, category});
        const createdCommand = await command.save();
        res.status(201).json(createdCommand);
    }
})

const getCommandById = asyncHandler(async (req, res) => {
   const command = await Command.findById(req.params.id);

   if(command){
       res.json(command);
   } else {
       res.status(404).json({message: "Command Not Found!"});
   }
});

module.exports = {getCommands, createCommand, getCommandById};
