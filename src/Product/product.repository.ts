import {  ProductRepositoryContract } from "./product.types";
import { PrismaClient as PC, Prisma } from "../generated/prisma"; 
import { Client } from "../prisma/client";


export const ProductRepository: ProductRepositoryContract = {
    async getById(id){
        try {
            const product = await Client.product.findUnique({
                where:{id: id}
            })
            return product
            
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2009') {
                    console.log("Validation error")
                } else if (error.code === 'P2025') {
                    console.log("Not found")
                }
            }
            throw error
        }
    },
    async getAll (take){
        if (take){
            const products = await Client.product.findMany({
                take: take,
            })
            return products    
        } else{
            const products = await Client.product.findMany({}) 
            return products
        }
    },
    async create(data) {
        return await Client.product.create({data})
    },
    async update(id, data) {
        return await Client.product.update({
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