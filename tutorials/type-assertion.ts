

//  Type Assertion (Утверждение типа) — это способ сказать компилятору TypeScript: 
//  "Эй, я, разработчик, знаю лучше тебя. Я уверен, что тип этого значения — вот такой". 

//  1. Это НЕ преобразование или приведение типов
//  2. Код не меняется во время выполнения. Это просто "подсказка" для компилятора на этапе проверки типов.
//  3. Используется, когда TS определяет тип слишком широко (например, any или unknown), а вы точно знаете, что там на самом деле.

interface User {
    email: string
    id: number
    name: string
}

const value: unknown = "Hello"


const value2: string = value as string

const user: User = value as User
console.log("ID: ", user.id)

console.log((value as string).length)
console.log(value2.length)