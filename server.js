var express = require('express'),
    routes = require('./routes');

var app = module.exports = express();

// Configuration

app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.bodyParser());
    //app.use(express.cookieParser());
    //app.use(express.session({ secret: 'restcook-session-secret' }));
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});

app.get('/', routes.index);
app.post('/item', routes.postItem);

app.listen(8080);
console.log("TodoExpress server listening on port %d in %s mode", 8080, app.settings.env);