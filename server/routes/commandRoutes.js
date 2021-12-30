const express = require('express');
const router = express.Router();
const {getCommands} = require('../controllers/commandController');

router.route("/").get(getCommands);

module.exports = router;
