
// Number, String, Boolean, undefined, null, object


let age: string = "32131";

let name1: string = "Orina"

let area: number = 5.32

let isAdmin: boolean = true


function sum1(a: number, b: number): number {
    return a + b
}
sum1(5, 10)
// sum1("321", 3)
const number: number = sum1(5, 3)



function parseNumber(str: string): number {
    return +str
}

const array: number[] = [1, 2,3 ,4 , 5, 6, 7,  8, 9,]
const array2: string[] = ['123']





// Union(Объединение) type 
let orina: string | number | boolean | object | undefined = "Orina"
orina = 5
orina = ""
orina = true

// [1,2 ,3 ,4, 5] | ["1", " 2,"]
const array4: (string | number)[]  = [1, 2, 3, "", "13"]

function sayValue(value: string | number) {
    console.log(value)
}
sayValue(543)
sayValue("Hello")

const matrix: [][] = [
    [],
    [],
    [],
    [],
    [],
]



const user: {
    name: string,
    age: number,
    subjects: string[]
} = {
    name: "Orina",
    age: 16,
    subjects: []
}


const arrayOfUsers: {
    name: string,
    age: number,
    subjects: string[]
}[] = []




const partialUser: {
    name: string,
    age: number,
    phone?: { price: number }
} = {
    name: "Orina",
    age: 20,
}

// partialUser.phone.price

// if (partialUser.phone) {
//     partialUser.phone.price
// }

// any - специальный тип, определяющий ЛЮБОЙ тип. Использование any - плохая практика, так как убирает все преимущества TS
let orina2: any = ""

orina2 = 5
orina2 = {}
orina2 = []
orina2 = true

// export 
// Вариант 1:
// export + создание переменной/функции/класса/объекта
export const exportedNumber1 = 5
// Вариант 2:
// Создаем переменную и ПОСЛЕ можно экспортировать с помощью export {}
const exportedNumber2 = 10
export { exportedNumber2 }

/*
Шаги / действия для запуска TS файла
    1. Скачать TS (npm install typescript)
    2. Скачать ts-node (npm install ts-node)
    3. Инициализировать конфиг ts - npx tsc --init (npx - node package executor | tsc - typescript compiler)
    4. В конфиге важно удалить: verbatimModuleSyntax
    5. В package.json добавить скрипт запуска TS файла через ts-node
*/