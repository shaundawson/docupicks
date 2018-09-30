const express = require('express'); // Imports express framework
const logger = require('morgan'); // Express middleware for logging requests and responses. Useful during dev mode so you can see what requests are being made.
const bodyParser = require('body-parser'); //Express middleware that you should use with forms. Adds a body object into your requuests so you can access POST parameter
const session = require('express-session');
const reactViews = require('express-react-views');
const methodOverride = require('method-override');
const movieRouter = require('./routes/moviesRouter');

// Initialize the express app
const app = express();

// Set the view folder and view engine
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.use(logger('dev')); // Set up morgan to log requests to the console.
app.use(methodOverride('_method'));
app.use(bodyParser.json()); //give app the ability to parse JSON
app.use(bodyParser.urlencoded({ extended: false })); // Allows app to reqd data from GET requests.
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
