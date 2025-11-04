import express from "express"
import { CategoryController } from "./category.controller"

const CategoryRouter: express.Router = express.Router()

CategoryRouter.get("/categories", CategoryController.getAll)
CategoryRouter.get("/categories/:id", CategoryController.getById)
CategoryRouter.post("/categoties", CategoryController.create)
CategoryRouter.delete("/categories/:id", CategoryController.delete)

export { CategoryRouter }