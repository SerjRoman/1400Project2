

const number: unknown = 5
// Runtime
if (typeof number === "") {
    number.
}
// if (typeof(number) === ) {}



const user = {
    name: "Oryna",
    age: 16
}


type User = typeof user


const user2: User = {}

// Ключевое слово typeof имеет два варианта работы в TS
// 1. Во время выполнения кода(например в условиях, при назначении значения переменной)
// typeof будет возвращать тип переменной в виде строки

// 2. До запуска кода(статическая типизация)
// typeof будет возвращать тип переменной(если объект, то со всеми ключами и тд)