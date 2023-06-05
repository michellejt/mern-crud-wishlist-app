const express = require('express');
const connectDB = require('./config/db');
const dotenv = require("dotenv").config()

const cors = require('cors');

const app = express();

const wishes = require('./routes/api/wishes');

// Connect Database
connectDB();
app.use(cors({ origin: true, credentials: true }));

// allows Express to read data sent using a POST or PUT request. It is used for recognizing incoming objects as JSON objects.
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/wishes', wishes);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));