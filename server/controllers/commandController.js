const Command = require('../models/commandModel');
const asyncHandler = require("express-async-handler");

const getCommands = asyncHandler(async (req,res) => {
    const commands = await Command.find();
    res.json(commands);
});

module.exports = {getCommands};
