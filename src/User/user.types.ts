import { Request, Response } from "express"
import { Prisma } from "../generated/prisma"

export type User = Prisma.UserGetPayload<{}>
export type UserWithoutPassword = Prisma.UserGetPayload<{omit: {password: true}}>
export type ErrorResponse = {message: string}
export type UserAuthResponse = {token: string}

// export type UserCreation = Prisma
// POST login - {email: string, password: string}
// POST regster - {email, username, password, avatar?}
// GET me
export type UserCreate = Prisma.UserUncheckedCreateInput

// Credentials - специальные данные для удостоверения личности
export interface LoginCredentials {
    email: string,
    password: string
}
export interface UserControllerContract {
    register: (req: Request<object, string, UserCreate>, res: Response<ErrorResponse | UserAuthResponse>) => Promise<void>
    login: (req: Request<object, ErrorResponse | UserAuthResponse, LoginCredentials>, res: Response<ErrorResponse | UserAuthResponse>) => Promise<void>
    me: (req: Request<object, ErrorResponse | UserWithoutPassword>, res: Response<ErrorResponse | UserWithoutPassword>) => Promise<void>
}
// 
export interface UserRepositoryContract {
    create: (credentials: UserCreate) => Promise<User >,
    findByEmail: (email: string) => Promise<User | null>,
    findByIdWithoutPassword: (id: number) => Promise<UserWithoutPassword | null>
}
export interface UserServiceContract {
    register: (credentials: UserCreate) => Promise<string>,
    login: (credentials: LoginCredentials) => Promise<string>,
    me: (id: number) => Promise<UserWithoutPassword | null>
}