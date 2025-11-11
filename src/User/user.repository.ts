import { UserRepositoryContract } from "./user.types"
import { Client } from "../prisma/client";


export const UserRepository: UserRepositoryContract = {
    async create(credentials) {
        return await Client.user.create({data: credentials})
    },
    async findByEmail(email) {
        const user = await Client.user.findUnique({
            where:{email:email}
        })
        return user
    },
    async findByIdWithoutPassword(id){
        const user = await Client.user.findUnique({
            where:{id},
            omit:{password: true}
        })
        return user
    }
}