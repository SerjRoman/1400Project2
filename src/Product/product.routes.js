const express = require('express')
const ProductController = require('./product.controller')


const ProductRouter = express.Router()

ProductRouter.get("/products/", ProductController.getAll)
// route (параметр пути /динамический параметр)-используеться для обработки шаблоного запроса но с разным параметром
// в express для создание динамическо ссылки мы должны указать двоеточие и название параметра 
ProductRouter.get("/products/:id", ProductController.getById)
// Функции обработчики запросов в Express если и возвращают что то, ТО ТОЛЬКО undefined(void)
ProductRouter.post("/products", ProductController.create)

module.exports = ProductRouter