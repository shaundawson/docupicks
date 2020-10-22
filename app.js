
require('dotenv').config(); // Loads environment variables from a .env file and adds them to the process.env object that is made available to the application
const express = require('express'); // Imports express framework
const logger = require('morgan'); // Express middleware for logging requests and responses. Useful during dev mode so you can see what requests are being made.
const bodyParser = require('body-parser'); // Express middleware that you should use with forms. Adds a body object into your requuests so you can access POST parameter.
const session = require('express-session');
const path = require('path');
const reactViews     = require('express-react-views');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const movieRouter = require('./routes/movieRouter');
const networksRouter = require('./routes/networkRouter');
const categoryRouter = require('./routes/categoryRouter');



// Start Express
const app = express();
// Set the view folder and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.use(logger('dev')); // Set up morgan to log requests to the console.
app.use(methodOverride('_method'));
app.use(bodyParser.json()); // Gives app the ability to parse JSON
app.use(bodyParser.urlencoded({ extended: false })); // Allows app to reqd data from GET requests.
app.use(cookieParser());
app.use(express.static(path.join('public')));


app.use(session({
  secret: 'keyboard cat',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
}));

// ROUTES
app.use('/movies', movieRouter);
app.use('/category', categoryRouter);
app.use('/network', networkRouter);

// GET request handler for homepage
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/newMovie', (req, res) => {
   res.render('NewMovie')
 });



module.exports = { app };
