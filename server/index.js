const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({status: 'success'})
});

const PORT = process.env.PORT || 5000

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log('success')
});
