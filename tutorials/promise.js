// Promise()
// const number = 5 
// fulfilled | rejected | pending

// const number = 5

// const numb = 6

// const promise = new Promise(function(resolve, reject) {
//     console.log('Отправляю запрос в базу данных')
//     setTimeout(() => {
//         // console.log("принял данные из БД")
//         reject("Феликс не был получен из БД")
//     }, 5000)
// })

// promise.then((data) => {
//     console.log(`'Данные переданы из БД': ${data}`)
    
//     console.log("Отправляю клиенту данные")
// }).catch( (message) => {
//     console.log(message)
// }).finally(() => {
//     console.log('Promise закончил свою работу')
// })

function getUser (){
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    name: "Felix"
                })
            }, 2000)
        }
    )
}

function updateUser (user){
    return new Promise(
        (resolve) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    name: "Updated Felix"
                })
            }, 2000)
        }
    )
}
function reportUser(user) {
    console.log(user.name)
}
// user = Promise<{id: 1, name: "Felix"}>
// Данные из промиса вытянуть из функции then -> НЕЛЬЗЯ
// getUser -> updateUser
const user = getUser()
user.then((user) => {
    console.log(user.id, user.name)
    const updatedUser = updateUser(user)
    updatedUser.then((user) => {
        return user
    })
})
// console.log(
//     user
// )
// Promise<{id: 1, name: "Felix"}>
// reportUser(user)
// workWithUser -> Promise<>
// await

// Библиотека fs/promises делает тоже самое что и fs однако работает с промисами
const fsPromises = require('fs/promises')

async function workWithUser (){
    try {
        const user = await getUser()
        console.log(user)
        // writeFile возвращает промис выполнение которого нужно дождаться с помощью await
        // JSON.stringify() - обратное JSON.parse, она получает данные js и переделывает их в специальную json строку
        await fsPromises.writeFile('./user.json', JSON.stringify(user))
        const user2 = JSON.parse(await fsPromises.readFile('./user2.json'))
        console.log("Read from file: ", user2)
        console.log('Felix successfuly saved in file')
    } catch(error) {
        console.log('Error occured', error.message)
    }
}

workWithUser()