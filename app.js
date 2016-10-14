var http = require('http');
var path=require('path');

var express = require('express');
var mongoose = require('mongoose');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var compression = require('compression');
var errorhandler = require('errorhandler');


var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];

//mongodb connect
var connect = function() {
    var options = {
        server: {
            socketOptions: {
                keepAlive: 1
            }
        }
    };
    mongoose.connect(config.db, options);
    console.log('mongodb had connected!');
};
connect();

mongoose.connection.on('error', function(err) { 
    console.log(err);
});

mongoose.connection.on('disconnected', function() {
    console.log('mongodb had disconnected. trying to reconnect now.');
    connect();
});

var app = express();

    //port setting
    app.set('port', process.env.PORT || 3000);

    //express settings
    app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
});
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(compression());
    app.use(session({
        secret: 'xxx',
        resave: false,
        saveUninitialized: true
    }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));


    if ('development' == app.get('env')) {
        app.use(errorhandler());
    }
    //前端后台路由分离
    app.use(function (req, res,next) {
	  if(req.path.indexOf('/api')>=0){
	    next();
	  }else{ //angular启动页
	    res.sendfile('public/index.html');
	  }
	});
    //routes
   require('./config/routes')(app, config);


   //server listen
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});