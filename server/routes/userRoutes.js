const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController")

//post
router.route('/register').post(register);

//post
router.route('/login').post(login);

module.exports = router;
