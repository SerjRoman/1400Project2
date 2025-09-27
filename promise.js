// Promise()
// const number = 5 
// fulfilled | rejected | pending

const number = 5

const numb = 6

const promise = new Promise(function(resolve, reject) {
    console.log('Отправляю запрос в базу данных')
    setTimeout(() => {
        // console.log("принял данные из БД")
        reject("Феликс не был получен из БД")
    }, 5000)
})

promise.then((data) => {
    console.log(`'Данные переданы из БД': ${data}`)
    
    console.log("Отправляю клиенту данные")
}).catch( (message) => {
    console.log(message)
}).finally(() => {
    console.log('Promise закончил свою работу')
})