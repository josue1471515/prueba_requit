var session = require('cookie-session');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const axios = require('axios').default;
const passport = require('passport');
// Intializations
const app = express();
require('./lib/passport');
// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');
// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Global variables
app.use((req, res, next) => {
    app.locals.user = req.user;
    next();
});

var expiryDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
app.use(session({
    name: 'session',
    keys: ['key1', 'key2'],
    cookie: {
        secure: true,
        domain: 'localhost',
        path: '/',
        expires: expiryDate
    }
}));

app.use(passport.initialize());
app.use(passport.session());
// Routes
app.use(require('./routes/auth'));
app.use(require('./routes/index'));
app.use('/users', require('./routes/user'));
app.use('/maps', require('./routes/map'));
app.use('/jobs', require('./routes/job'));
// Public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
});