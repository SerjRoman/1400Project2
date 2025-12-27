import express from 'express'
import { ProductRouter } from './Product/product.routes'
import { UserRouter } from './User/user.routes'
import { logMiddleware } from './middlewares/log.middleware'
import { CategoryRouter } from './Category/category.routes'
import cors from 'cors'
/* 
Роутер(Router) - указывает какой Контроллер должен обрабатывать запрос. Routes

Контроллер(Controller) - работает с запросом И ответом. Нет никакой логики(помимо валидации)
Сервис(Service) - реализация Бизнес Логики(то есть, то для чего нужно приложение/прямые задачи) приложения
Репозиторий(Repository) - предоставляет доступ к данным(из БД / из файла / )


src - source code - исходный код
*/



// Создаём приложение express 
const app: express.Express = express()

// Настраеваем приложение express на получение данных в формате json
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(logMiddleware)
app.use("/products/", ProductRouter)
app.use("/categories/", CategoryRouter)
app.use("/users/", UserRouter)

// Метод listen запускает приложение express
// Метод принимает 3 параметра
// 1. Порт - Уникальный идентификатор запущенного процесса. От 0 до 65535
// 2. Хост/IP address - Уникальный идентификатор на ПК в сети (адрес компьютера)
// 3. Callback function которая сработает при запуске сервера

const PORT: number = 8001
const HOST: string = 'localhost'
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

// R - router
// S -service
// C -controller
// Re -repository


app.listen(PORT, HOST, () => {
    console.log(`Server started on http://${HOST}:${PORT}`)
})

