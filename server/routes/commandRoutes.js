const express = require('express');
const router = express.Router();
const {getCommands} = require('../controllers/commandController');
const {protect} = require("../middlewares/authMiddleware");

router.route("/").get(protect, getCommands);

module.exports = router;
