const express = require('express'); // Imports express framework
const logger = require('morgan'); // Express middleware for logging requests and responses. Useful during dev mode so you can see what requests are being made.
const bodyParser = require('body-parser'); // Express middleware that you should use with forms. Adds a body object into your requuests so you can access POST parameter.
const session = require('express-session');
const { createEngine } = require('express-react-views');
const methodOverride = require('method-override');
const path           = require('path');
const EJS  = require('ejs');
const cookieParser = require('cookie-parser')
const movieRouter = require('./routes/moviesRouter');
const networkRouter = require('./routes/networksRouter');
const categoryRouter = require('./routes/categoriesRouter');


// Initialize the express app
const app = express();
// Set the view folder and view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.locals.siteTitle = 'Docupicks';

app.use(logger('dev')); // Set up morgan to log requests to the console.
app.use(methodOverride('_method'));
app.use(bodyParser.json()); // Give app the ability to parse JSON
app.use(bodyParser.urlencoded({ extended: false })); // Allows app to reqd data from GET requests.
app.use(cookieParser());
app.use(express.static(path.join('public'))); // Designates and makes public folder acccessible through the root  -- css files,images, scripts. Can be used to access any file directly or with routes

app.use(session({
  secret: 'keyboard cat',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
}));

// ROUTES
app.use('/movies', movieRouter);
app.use('/network', networkRouter);
app.use('/genre', categoryRouter);

// GET request handler for homepage
app.get('/', (req, res) => {
    res.render('index', {
      pageTitle: 'Home',
      pageId: 'home'
     });
  });

module.exports = { app };
