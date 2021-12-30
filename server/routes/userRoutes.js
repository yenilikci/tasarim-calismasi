const express = require("express");
const { register, login } = require("../controllers/userController")
const router = express.Router();

//post
router.route('/register').post(register);

//post
router.route('/login').post(login);

module.exports = router;
