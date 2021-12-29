const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/connection");

//routes
const userRoutes = require("./routes/userRoutes")
const {notFound, errorHandler} = require("./middlewares/errorMiddleware");

const app = express();

dotenv.config();

connectDB();
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use('/api/v1/users', userRoutes);
app.use(notFound);
app.use(errorHandler);


app.get('/', (req, res) => {
    res.json({status: 'success'})
});

const PORT = process.env.PORT || 5000

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log('success')
});
