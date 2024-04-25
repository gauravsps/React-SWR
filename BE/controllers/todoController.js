const TodoModel = require("../models/todoModel");

exports.createTodo = async (req, res, next) => {
  try {
    console.log(req.body, "check body");
    const { description } = req.body;

    const body = { description };
    const doc = await TodoModel.create(body);
    return res.status(201).json({
      data: doc,
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
    });
  }
};

exports.getTodos = async (req, res, next) => {
  console.log("running...");
  try {
    const todos = await TodoModel.find();
    return res.status(200).json({
      data: todos,
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
    });
  }
};

exports.getTodo = async (req, res, next) => {
  try {
    const todo = await TodoModel.findById(req.params.id);
    if (!todo) {
      return res.status(400).json({
        error: "Todo not found",
      });
    }
    return res.status(200).json({
      data: todo,
    });
  } catch (error) {
    return res.status(400).json({
      error: error,
    });
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    console.log(req.params.id, req.body, "Check the data");
    const todo = await TodoModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!todo) {
      return res.status(404).send({ error: "Todo not found" });
    }
    res.send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    console.log(req.params, "cehck params");
    const todo = await TodoModel.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).send({ error: "Todo not found" });
    }
    res.send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
};
