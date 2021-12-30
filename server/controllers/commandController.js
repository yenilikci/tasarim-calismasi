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

const updateCommand = asyncHandler(async (req, res) => {
    const {title, m1, m2, m3, m4, m5, m6, category} = req.body;

    const command = await Command.findById(req.params.id);

    if(command.user.toString() !== req.user._id.toString()){
        res.status(401);
        throw new Error("You Can't Perform This Action!");
    }

    if(command){
        command.title = title;
        command.m1 = m1;
        command.m2 = m2;
        command.m3 = m3;
        command.m4 = m4;
        command.m5 = m5;
        command.m6 = m6;
        command.category = category;

        const updateCommand = await command.save();
        res.json(updateCommand);
    } else {
        res.status(404);
        throw new Error("Command Not Found!");
    }
});

const deleteCommand = asyncHandler(async (req, res) => {
    const command = await Command.findById(req.params.id);

    if(command.user.toString() !== req.user._id.toString()){
        res.status(401);
        throw new Error("You Can't Perform This Action!");
    }

    if(command) {
        await command.remove();
        res.json({message: "Command Removed!"});
    } else {
        res.status(404);
        throw new Error("Command not found!");
    }
});


module.exports = {getCommands, createCommand, getCommandById, updateCommand, deleteCommand};
