import { Request, Response } from "express"
import { ProductService } from "./product.service"
import { ProductControllerContract } from "./product.types"

// const ProductService = require('./product.service')

export const ProductController: ProductControllerContract = {
    getAll: async (req, res)=>{ 
        try {
            console.log(req.query)
            const take = req.query.take 
            if (take) {
                if (isNaN(+take)){      
                    res.status(400).json("is not a number")
                    return;
                }
                const slicedProducts =  await ProductService.getAll(+take)
                res.status(200).json(slicedProducts)
                return;
            }
            const products = await ProductService.getAll()
            res.status(200).json(products)
            
        } catch (error) {
            console.log(error)
            res.status(500).json('unhandled error')
        }
    },
    getById: async(req, res)=>{
        try {
            if (!req.params.id){
                res.status(400).json("id is required");
                return
            }
            const id = +req.params.id
            console.log(id)
            if (isNaN(id)){
                res.status(400).json("id must be an integer");
                return;
            }
            const product = await ProductService.getById(id)
            
            if (!product){
                res.status(404).json("product not found")
                return;
            }
            
            res.json(product)
            
        } catch (error) {
            console.log(error)
            res.status(500).json('unhandled error')
        }
    },
    create: async (req, res) => {
        try {
            
            console.log(req.body)
            const body = req.body
            if (!body) {
                res.status(422).json("Body is required.")
                return
            }
            if (!body.name) {
                res.status(422).json("name is required.")
                return
            }
            if (!body.price) {
                res.status(422).json("price is required.")
                return
            }
            if (!body.categoryId) {
                res.status(422).json("category is required.")
                return
            }
            
            const product = await ProductService.create(body)
            if (!product) {
                res.status(500).json("Product creation error")
                return
            }
            res.status(201).json(product)
        } catch (error) {
            console.log(error)
            res.status(500).json('unhandled error')
        }
    },
    async update(req, res) {
        try {
            
            const id = req.params.id
            if (!id){
                res.status(400).json("id is required");
                return
            }
            if (isNaN(+id)){
                res.status(400).json("id must be an integer");
                return;
            }
            const body = req.body
            // Проверяем наличие ключа id в объекте body
            // "key" in object
            if ("id" in body){
                res.status(422).json("body must not consist id");
                return
            }
            const product = await ProductService.update(+id, body)
            if (!product) {
                res.status(500).json("Product creation error")
                return
            }
            res.status(200).json(product)
        } catch (error) {
            console.log(error)
            res.status(500).json('unhandled error')
        }
        
    },
    // delete(req, res) {
    // }
}


// module.exports = ProductController
