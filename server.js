// dependencies
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require("express");
const morgan = require("morgan");
const passport = require('passport');
const exphbs = require('express-handlebars');
const session = require('express-session');
const connectFlash = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const homePage = require('./controllers/home-page');
const apiUserRoutes = require('./routes/api/user')
require('./passport-config')
const app = express();

 app.use(morgan('tiny'));

//use cookie parser
app.use(cookieParser('secret'));

//config session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 86400000 1 day
    }
}));



// Enable body parser post data
app.use(bodyParser.json());

 app.use(bodyParser.urlencoded({ extended: true }));

//Enable flash message
app.use(connectFlash());

//Config passport middleware
app.use(passport.initialize());
app.use(passport.session());

// init all web routes

app.use(apiUserRoutes)
homePage.handleHelloWorld(app);



let port = process.env.PORT || 8080

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname + '/client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/client/build/index.html'));
  });
}

app.listen(port, () => console.log(`Building a login system with NodeJS is running on port ${port}!`));