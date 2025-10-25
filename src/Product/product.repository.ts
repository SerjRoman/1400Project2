import {  ProductRepositoryContract } from "./product.types";
import { PrismaClient as PC, Prisma } from "../generated/prisma"; 

const PrismaClient = new PC() 

export const ProductRepository: ProductRepositoryContract = {
    async getById(id){
        try {
            const product = await PrismaClient.product.findUnique({
                where:{id: id}
            })
            return product
            
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2009') {
                    console.log("Validation error")
                } else if (error.code === 'P2025') {
                    console.log("Entity is not found")
                }
            }
            throw error
        }
    },
    async getAll (take){
        if (take){
            const products = await PrismaClient.product.findMany({
                take: take,
            })
            return products    
        } else{
            const products = await PrismaClient.product.findMany({}) 
            return products
        }
    },
    async create(data) {
        return await PrismaClient.product.create({data})
    },
    async update(id, data) {
        return await PrismaClient.product.update({
            where: {
                id
            }, 
            data
        })
    }
    
}
// Router -> Controller -> Service -> Repository
//           Validation Error
            // res.status(409).json() 