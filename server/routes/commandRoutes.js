const express = require('express');
const router = express.Router();
const {getCommands, createCommand} = require('../controllers/commandController');
const {protect} = require("../middlewares/authMiddleware");

router.route("/").get(protect, getCommands);
router.route("/create").post(protect, createCommand);

module.exports = router;
