const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// Bring in DB Config File
require('./config/DB');

const app = express();

const poll = require('./routes/poll');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Enable CORS
app.use(cors());

app.use('/poll', poll);

const port = 5000;

// Start server
app.listen(process.env.PORT || port, () => console.log("server running..."));