const register = (req, res) => {
    const {name, email, password, picture} = req.body;
    res.json({
        name,
        email
    })
};

module.exports = {register}
