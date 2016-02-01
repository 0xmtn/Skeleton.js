
/**
 * Module dependencies.
 */

var express = require('express')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , errorHandler = require('errorhandler')
  , session = require('express-session')
  , cookieSession = require("cookie-session")
  , favicon = require('serve-favicon')
  , static = require('serve-static')
  , logger = require('morgan')
  , methodOverride = require('method-override')
  , http = require('http')
  , path = require('path')
  , flash = require("connect-flash")
  , compression = require("compression")
  , lessMiddleware = require('less-middleware');

var env = process.env.NODE_ENV || 'development';
var config = require('./config').config[env];

var app = express();
app.set('env', env);


var pssprt = require("passport");
var passport = require('./modules/middleware/passport_strategies')(pssprt, config);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(cookieParser());
app.use(cookieSession({
  keys: ['123456789qwerty'],
}));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(compression());
app.use(static(path.join(__dirname, 'views')));
app.use(static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


/*
 * Routers
 */

var index = express.Router();
var user = express.Router();

var routers = {index: index,
               user: user
              };


var routes = require('./routes/routes')(app, routers, passport);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
