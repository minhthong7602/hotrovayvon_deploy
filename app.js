const express = require('express');
const path = require('path');
const config = require('./back-end/contanst/config');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const dbContext = require('./back-end/models/dbContext');
const admin = require('./back-end/routes/admin');
const authenticate = require('./back-end/security/auth')(passport);

var port = process.env.PORT || 3000;
var app = express();

app.use('/app', express.static('./front-end'));

app.use(logger('dev'));
app.use(session({
    secret: config.secretPassportKey
}));

//User passport session, bodyparser, cookie
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Initialize passport
var initPassport = require('./passport-init');
initPassport(passport);

//Init Database
var db = new dbContext().initDatabase();
setTimeout(() => {
    db.testInsertUser();
}, 2000);

//Mapping url
app.use('/auth', authenticate);
app.use('/admin', admin);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/front-end/index.html');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/front-end/home.html');
});

app.listen(port, () => {
    console.log(`Server is listening on port  ${port}`);
});
