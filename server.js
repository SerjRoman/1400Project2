
const express = require('express')
// Создаём приложение express 
const app = express()

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
    res.json("hello")
})

app.listen(PORT, HOST, () => {
    console.log(`Server started on http://${HOST}:${PORT}`)
})