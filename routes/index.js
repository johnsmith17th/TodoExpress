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

module.exports.postItemDone = function postItemDone(req, res) {

    var a = req.param('id').split(',');
    var q = { _id: { $in: a} }, s = { $set: { done: true, dont: Date.now()} };

    model.TodoItem.update(q, s, { multi: true }, function (err) {
        if (err) console.log(err);
        res.redirect('/');
    });
};

module.exports.postItemUndone = function postItemUndone(req, res) {

    var a = req.param('id').split(',');
    var q = { _id: { $in: a} }, s = { $set: { done: false }, $unset: { dont: 1} };

    model.TodoItem.update(q, s, { multi: true }, function (err) {
        if (err) console.log(err);
        res.redirect('/');
    });
};

module.exports.postItemDelete = function postItemDelete(req, res) {

    var a = req.param('id').split(',');
    var q = { _id: { $in: a} };
    model.TodoItem.remove(q, function (err) {
        if (err) console.log(err);
        res.redirect('/');
    });
};