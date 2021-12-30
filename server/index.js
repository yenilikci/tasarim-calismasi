const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/connection");

//routes
const userRoutes = require("./routes/userRoutes")
const commandRoutes = require("./routes/commandRoutes")

const {notFound, errorHandler} = require("./middlewares/errorMiddleware");

const app = express();

dotenv.config();

connectDB();
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/commands', commandRoutes);
app.get('/api/v1', (req, res) => {
    res.json({status: 'success'})
});
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log('success')
});
