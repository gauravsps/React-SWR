const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router
    .route("/")
    .get(todoController.getTodos)
    .post(todoController.createTodo);

router
    .route("/:id")
    .get(todoController.getTodo)
    .delete(todoController.deleteTodo);

router.route("/update/:id").patch(todoController.updateTodo);

module.exports = router;