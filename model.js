var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/todoexp');

var TodoItemSchema = new Schema({
    what: { type: String, required: true },
    time: { type: Date, required: true },
    done: { type: Boolean }
});

var TodoItem = module.exports.TodoItem = mongoose.model('Item', Schema);