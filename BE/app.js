const express = require('express');

const app = express();
const cors = require('cors'); // Import cors
const todoRouter = require('./routes/todoRoute');

app.use(express.json());
app.use(cors()); // Enable CORS

//Add Routers Here.

app.use('/api/todo', todoRouter);

module.exports = app