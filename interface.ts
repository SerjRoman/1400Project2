




const user: User = {
    id: 1,
    name: "Orina"
}

const users: User[] = []

function getUser (): User {
    return user
}
const name: User = '123'


interface UserService {
    getUser: (id: number) => User,
    createUser: (data: User) => User,
    getUsers: () => User[],
    deleteUser: (id: number) => void
}



const UserService: UserService = {
    getUser: function (id) {

    },
    createUser: function (data) {
        return user
    },
    getUsers: function () {
        return []
    },
    deleteUser: function (id) {
        
    }
}

type StringOrNull = string | null

const name2: StringOrNull = ""
const name3: StringOrNull = null
const name4: StringOrNull = null

type UserType = {}
type GenericType = string | null | number | undefined | void | boolean | object

type GenericType2 = GenericType | object[]


// Utility types - это специальные типы, которые позволяют выполнять полезную работу над типами
// Omit<Type, "param" | "param2" | "param3"> - специальный тип, который позволяет убрать свойства объекта из указанного типа
interface User {
    id: number,
    name: string
    getName: () => void
}
type UserWithoutId = Omit<User, "id" | "getName">
// Partial<Type> - специальный тип, который меняет все свойства объекта на опциональные

type PartialUser = Partial<User>