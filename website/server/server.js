// Importing required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const winston = require('winston');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const flash = require('connect-flash');
const session = require('express-session');


// Defining port
const port = process.env.PORT || 9000;

// Defining app
const app = express();

// Defining middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
app.use(flash());

app.set('view engine', 'ejs');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining the Routes
app.use('/users', require('./routes/students.js'));
app.use('/events', require('./routes/events.js'));
mongoose.connect(keys.mongodb.dbURI, {useNewUrlParser: true}).then(() => console.log("MongoDB connected!")).catch(err => console.log(err))
const autoIncrement = require('mongoose-sequence');
// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}`);

module.exports = app;
