import express from "express"
import { CategoryController } from "./category.controller"

const CategoryRouter: express.Router = express.Router()

CategoryRouter.get("/", CategoryController.getAll)
CategoryRouter.get("/:id", CategoryController.getById)
CategoryRouter.post("", CategoryController.create)
CategoryRouter.delete(":id", CategoryController.delete)

export { CategoryRouter }