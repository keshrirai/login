const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to MongoDB
// mongoose.connect(db, { useNewUrlParser: true })
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err));

const mongo = require('mongodb');
mongoose.connect('mongodb://localhost/test');


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


// Express body parser
app.use(bodyParser.urlencoded({ extended: false }));


// app.use(express.json());

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log('Server Started on  port ${PORT}'));

