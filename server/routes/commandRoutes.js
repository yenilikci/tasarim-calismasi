const express = require('express');
const router = express.Router();
const {getCommands, createCommand, getCommandById} = require('../controllers/commandController');
const {protect} = require("../middlewares/authMiddleware");
const {route} = require("express/lib/router");

router.route("/").get(protect, getCommands);
router.route("/create").post(protect, createCommand);
router.route("/:id").get(getCommandById);

module.exports = router;
