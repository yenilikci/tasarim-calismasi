const jwt = require("jsonwebtoken")

const generateToken = (_id) => {
    return jwt.sign({_id},process.env.JWT_SECRET, {
        expiresIn: "1d"
    });
};

module.exports = generateToken;
