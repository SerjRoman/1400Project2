
interface BaseEntity {
    id: number,
    createdAt: Date,
    name: string
}

interface User extends BaseEntity {
    name: string,
    age: number
}
interface Product {
    id: number,
    createdAt: Date,
    title: string,
    price: number
}

const user: User = {
    name: "",age: 5,
    id: 5,
    createdAt: new Date()
}

class Animal{

}

class Bird extends Animal {

}





interface SomeData2<T extends > {
    status: "ok" | "error",
    data: T
}
const data: SomeData2<"32132"> = {

}