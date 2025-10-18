
// Generic типы - универсальный тип, который можно передавать(например в функцию)
              // 
/**
     * Универсальная функция для получения данных.
     * T - Type
     * <T> - это объявление "Generic-параметра". 
     * Мы говорим: "Эта функция будет работать с каким-то типом T, который мы узнаем позже".
*/

import { Product, ProductCreate } from "../src/Product/product.types"

interface User {
    id: number
    name: string,

}
function getData<T>(url: string): T {

    // const data: T = ""
    const data: any = fetch(url)
    return data
}


function getUsers() {
    const url = "/users/"
    const users = getData<string[]>(url)
}
        // T = string, argument: string[] , string
function isType<T>(argument: T[]): T {
    if (argument[0]) {
        return argument[0]
    } else {
        throw new Error()
    }
}

// const users: string[] = ["Oryna", "Artem", "Dima"]
// isType<number>(users)

// T - Type
// K - Key
// 
interface SomeData<DataType> {
    status: "ok" | "error",
    code: number,
    data: DataType,
}

const users: SomeData<User[]> = {
    status: "ok",
    code: 200,
    data: [{id: 1, name: "Oryna"}, {id: 2, name: "Ilya"}]
}

const products: SomeData<Product[]> = {
    status: "ok",
    code: 200,
    data: [{
        id: 1, name: "Oryna",
        category: "",
        price: 0
    }, {
        id: 2, name: "Ilya",
        category: "",
        price: 0
    }]
}


