var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

mongoose.connect('mongodb://localhost/todoexp');

var TodoItemSchema = new Schema({
    what: { type: String, required: true },
    time: { type: Date, required: true },
    done: { type: Boolean },
    dont: { type: Date }
});

var TodoItem = module.exports.TodoItem = mongoose.model('Item', TodoItemSchema);