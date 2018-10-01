const express = require('express'); // Imports express framework
const logger = require('morgan'); // Express middleware for logging requests and responses. Useful during dev mode so you can see what requests are being made.
const bodyParser = require('body-parser'); // Express middleware that you should use with forms. Adds a body object into your requuests so you can access POST parameter.
const session = require('express-session');
const reactViews = require('express-react-views');
const methodOverride = require('method-override');
const path           = require('path');

const movieRouter = require('./routes/moviesRouter');
const networkRouter = require('./routes/networksRouter');
const categoryRouter = require('./routes/categoriesRouter');

//const movieController = require('./routes/moviesController');
//const networkController = require('./routes/networksController');
//const categoryController = require('./routes/categoriesController');

// Initialize the express app
const app = express();
// Set the view folder and view engine
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());


app.use(logger('dev')); // Set up morgan to log requests to the console.
app.use(methodOverride('_method'));
app.use(bodyParser.json()); // Give app the ability to parse JSON
app.use(bodyParser.urlencoded({ extended: false })); // Allows app to reqd data from GET requests.
app.use(express.static(path.join('public'))); // Designates and makes public folder acccessible through the root  -- css files,images, scripts. Can be used to access any file directly or with routes

app.use(session({
  secret: 'keyboard cat',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
}));

// ROUTES
app.use('/movies', movieRouter);
app.use('/networks', networkRouter);
app.use('/tags', categoryRouter);

// GET request handler for homepage
app.get('/', (req, res) => {
  res.render('Index');
});


module.exports = { app };
