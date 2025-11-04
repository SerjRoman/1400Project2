import { CategoryRepositoryContract } from "./category.types";
import { Client } from "../prisma/client";

export const CategoryRepository: CategoryRepositoryContract = {
    async getAll(take, skip){
        return await Client.category.findMany({
            take: take,
            skip: skip
        })
    },
        
    async getById(id){
        try {
            return await Client.category.findUnique({
                where: {id}
            })
        } catch (error) {
            console.log("Error in getById", error)
            return null
        }
    },
    

    async create(data){
        try{
            return await Client.category.create({data})
        }
        catch (error) {
            console.log('Error in create', error)
            throw error
        } 
    },
    
    
    async delete(id){
        try{
            return await Client.category.delete({
                where:{id}
            })
        }
        catch (error) {
            throw error
        }
    }
}