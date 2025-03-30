const routes = require("express").Router()
const TaskController = require("../controller/TaskController")
const Task = require("../models/Task")

routes.get("/", TaskController.getAll)
routes.post("/create", TaskController.createTask)
routes.get("/getById/:id/:method?",TaskController.getById)
routes.post("/updateOne/:id",TaskController.updateTask )
routes.get("/deleteOne/:id/",TaskController.deletetask)
module.exports = routes
