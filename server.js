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

const PORT = 8001
const HOST = 'localhost'
// get - метод, который позволяет обработать HTTP запрос
// Первый параметр - ссылка
// Второй параметр - функция обработки запроса, принимает два аргумента - req, res
// req - Request, res - Response
app.get("/", (req, res) =>{
    res.status(200).json("hello")
})
// Query параметры - пишутся в ссылке после знака "?". Эти параметры не меняют ссылку(не влият на нее)
// Если клиент передал Query параметры, тогда их можно получиь с помощью req.query
// http://localhost:8000/products
app.get("/products", (req,res)=>{
    console.log(req.query)
    const take = req.query.take
    if (take) {
        if (isNaN(+take)){
            res.status(400).json("is not a number")
            return;
        }
        const slicedProducts = products.slice(0, +take)
        res.status(200).json(slicedProducts)
        return;
    }
    res.status(200).json(products)
})
// route (параметр пути /динамический параметр)-используеться для обработки шаблоного запроса но с разным параметром
// в express для создание динамическо ссылки мы должны указать двоеточие и название параметра 
app.get("/products/:id",(req, res)=>{
    // NaN - Not A Number
    const id = +req.params.id
    console.log(id)
    if (isNaN(id)){
        res.status(400).json("id must be an integer");
        return;
    }
    const product = products.find((pr)=>{
        // true/false
        const isMatch = pr.id === id
        return isMatch
    })
    if (!product){
        res.status(404).json("product not found")
        return;
    }
    
    res.json(product)
})
// Функции обработчики запросов в Express если и возвращают что то, ТО ТОЛЬКО undefined(void)


app.listen(PORT, HOST, () => {
    console.log(`Server started on http://${HOST}:${PORT}`)
})
