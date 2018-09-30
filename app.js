// Import express from dependencies
const express = require('express');
// Require morgan
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const reactViews = require('express-react-views');
const methodOverride = require('method-override');
const movieRouter = require('./routes/moviesRouter');
const movieController = require('./routes/moviesController');

// Initialize the express app
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

// Set up morgan to log requests
app.use(logger('dev'));
app.use(methodOverride('_method'));
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'keyboard cat',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
}));

// ROUTES

app.use('/movies', movieRouter);

// GET request handler for '/' (roote route)
app.get('/', (req, res) => {
  res.send('hello world');
});


module.exports = { app };
