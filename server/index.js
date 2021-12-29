const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({status: 'success'})
});

app.listen('5000', (err) => {
    if (err) throw err;
    console.log('success')
});
