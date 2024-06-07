const todo = require("../models/todo")
const asyncHandler = require("express-async-handler")

exports.getAllTodos = asyncHandler(async (req, res) => {
    const result = await todo.find()
    res.json({ message: "todo fetch success", result })
})
exports.addTodo = asyncHandler(async (req, res) => {
    // console.log(req.body)
    await todo.create(req.body)
    res.json({ message: "todo add success" })
})
exports.updateTodo = asyncHandler(async (req, res) => {
    // console.log(req.params)
    await todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "todo update success" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    // console.log(req.params)
    await todo.findOneAndDelete(req.params.id)
    res.json({ message: "todo delete success" })
})