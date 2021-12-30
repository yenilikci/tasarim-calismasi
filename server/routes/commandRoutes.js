const express = require('express');
const router = express.Router();
const {getCommands, createCommand, getCommandById, updateCommand, deleteCommand} = require('../controllers/commandController');
const {protect} = require("../middlewares/authMiddleware");
const {route} = require("express/lib/router");

//get all
router.route("/").get(protect, getCommands);

//post
router.route("/create").post(protect, createCommand);

//get, put, delete
router.route("/:id")
    .get(getCommandById)
    .put(protect, updateCommand)
    .delete(protect, deleteCommand);

module.exports = router;
