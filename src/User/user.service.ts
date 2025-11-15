import { UserServiceContract } from "./user.types"
import { UserRepository } from "./user.repository"
import { sign } from "jsonwebtoken"
import { ENV } from "../config/env"
import { StringValue } from 'ms'
import { compare, genSalt, hash } from "bcryptjs"
/*

NOT_FOUND -> ресурс(пользователь) не найден
USER_EXISTS -> пользователь уже существует!
WRONG_CREDENTIALS - неправильные данные для входа
*/

export const UserService: UserServiceContract = {
    async register (credentials){
        const user = await UserRepository.findByEmail(credentials.email)

        if (user){
            throw new Error("USER_EXISTS")
        }
        // Хешироание - это шифрование данные, чаще всего без возможности расшифроки
        // Полученный хеш (hashedPassword) — это не просто зашифрованная строка.
		// Он имеет специальную структуру, которая включает в себя всю необходимую
		// информацию для будущей проверки пароля.
		//
		// Примерный вид хеша для пароля "my_password123":
		// $2b$10$fA9.oqm3.sI9K.Y4C9kKKeu/4s5G3f.6Y4fH.2o1E7m2B8vC9kKKe
        // 
		// Он состоит из нескольких частей, разделенных символом "$":
		// 1. `$2b` - Идентификатор алгоритма bcrypt.
		// 2. `10` - "Стоимость" или сложность хеширования (то самое число, что мы передали в функцию `hash`).
		// 3. `fA9.oqm3.sI9K.Y4C9kKKe` - Это "соль" (salt). Случайная строка, которая генерируется
		//    для каждого пароля индивидуально. Она добавляется к паролю перед хешем.
		//    Благодаря соли, даже два одинаковых пароля будут иметь совершенно разные хеши.
		// 4. `u/4s5G3f.6Y4fH.2o1E7m2B8vC9kKKe` - Это непосредственно результат хеширования
		//    пароля вместе с солью.
		//
		// Когда мы вызываем `compare(password, hash)`, библиотека `bcryptjs` сама разбирает
		// эту структуру, извлекает из нее соль и стоимость, а затем проводит сравнение.
		//
        const hashedPassword = await hash(credentials.password, 10)

        const hashedCredentials = {
            ...credentials,
            password: hashedPassword
        }

        const newUser = await UserRepository.create(hashedCredentials)
        const token = sign({id: newUser.id}, ENV.JWT_ACCESS_SECRET_KEY, {
            expiresIn: ENV.JWT_EXPIRES_IN as StringValue
        })
        return token
    },
    async login(credentials) {
        const user = await UserRepository.findByEmail(credentials.email)

        if (!user){
            throw new Error("NOT_FOUND")
        }
        // Функция `compare` асинхронная, так как процесс сравнения требует вычислительных ресурсов
		// и может занять некоторое время. Она берет пароль в открытом виде, "солит" его
		// (используя соль, сохраненную внутри хеша user.password) и хеширует.
		// Затем она сравнивает полученный хеш с тем, что хранится в базе.
        const isMatch = await compare(credentials.password, user.password)
        if(!isMatch){
            throw new Error("WRONG_CREDENTIALS")
        }
        const token = sign({id: user.id}, ENV.JWT_ACCESS_SECRET_KEY, {
            expiresIn: ENV.JWT_EXPIRES_IN as StringValue
        })
        return token
    },
    async me(id){
        const user = await UserRepository.findByIdWithoutPassword(+id)
        return user
    }
}
