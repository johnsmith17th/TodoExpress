var model = require('../model')

module.exports.index = function index(req, res) {

    model.TodoItem.find().sort('-time').exec(function (err, doc) {
        res.render('index', { list: doc });
    });
};

module.exports.postItem = function postItem(req, res) {

    var m = new model.TodoItem({
        what: req.param('what'),
        time: Date.now(),
        done: false
    });
    m.save(function (err, doc) {
        res.redirect('/');
    });
};