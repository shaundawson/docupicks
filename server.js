const express        = require('express');
const logger         = require('morgan');
const bodyParser     = require('body-parser');
const session        = require('express-session');
const reactViews     = require('express-react-views');
const methodOverride = require('method-override');


// init a port
const PORT = process.env.PORT || 3000;

// set up express
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

// logger
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret:            'keyboard cat',
  cookie:            { maxAge: 60000 },
  resave:            false,
  saveUninitialized: false,
}));


app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => console.log(`Server up and listening on port ${PORT} in ${app.get('env')} mode`));
