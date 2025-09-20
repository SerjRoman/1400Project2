const path = require("path")
const fs = require("fs")
const express = require('express')
// Создаём приложение express 
const app = express()

// Получаем путь к файлу products.json
const productsPath = path.join(__dirname, "products.json")
// Получаем данные из файла с помощью readFileSync в строковом формате
// Т.к. данные строковые но в формате жсона мы можем переделать из в типы данных js с помощью  JSON.parse
const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))

// Метод listen запускает приложение express
// Метод принимает 3 параметра
// 1. Порт - Уникальный идентификатор запущенного процесса. От 0 до 65535
// 2. Хост/IP address - Уникальный идентификатор на ПК в сети (адрес компьютера)
// 3. Callback function которая сработает при запуске сервера

const PORT = 8000
const HOST = 'localhost'
// get - метод, который позволяет обработать HTTP запрос
// Первый параметр - ссылка
// Второй параметр - функция обработки запроса, принимает два аргумента - req, res
// req - Request, res - Response
app.get("/", (req, res) =>{
    res.status(200).json("hello")
})
app.get("/products",(req,res)=>{
    res.status(200).json(products)
})
app.listen(PORT, HOST, () => {
    console.log(`Server started on http://${HOST}:${PORT}`)
})