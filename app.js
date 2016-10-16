var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var signin = require('./routes/signin');
var teahomepage = require('./routes/teahomepage');
var teapaper = require('./routes/teapaper');
var teaaddpaper = require('./routes/teaaddpaper');
var teaeditpaper = require('./routes/teaeditpaper');
var teaeditquestion = require('./routes/teaeditquestion');
var teapapermark = require('./routes/teapapermark');
var teacorrect = require('./routes/teacorrect');
var teacorstu = require('./routes/teacorstu');
var teaclassmanage = require('./routes/teaclassmanage');
var teaeditclass = require('./routes/teaeditclass');
var teaclasspaper = require('./routes/teaclasspaper');
var teastumanage = require('./routes/teastumanage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/signin', signin);
app.use('/teahomepage', teahomepage);
app.use('/teapaper', teapaper);
app.use('/teaaddpaper', teaaddpaper);
app.use('/teaeditpaper', teaeditpaper);
app.use('/teaeditquestion', teaeditquestion);
app.use('/teapapermark', teapapermark);
app.use('/teacorrect', teacorrect);
app.use('/teacorstu', teacorstu);
app.use('/teaclassmanage', teaclassmanage);
app.use('/teaeditclass', teaeditclass);
app.use('/teaclasspaper', teaclasspaper);
app.use('/teastumanage', teastumanage);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
