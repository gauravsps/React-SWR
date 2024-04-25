const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    // title: String,
    description: String,
    // completed: Boolean,
}, {
    timestamps: true
});

const Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;
