import { Request, Response } from "express"
import { ProductService } from "./product.service"

// const ProductService = require('./product.service')

export const ProductController = {
    getAll: (req: Request,res: Response)=>{ 
        console.log(req.query)
        const take = req.query.take 
        if (take) {
            if (isNaN(+take)){      
                res.status(400).json("is not a number")
                return;
            }
            const slicedProducts =  ProductService.getAll(+take)
            res.status(200).json(slicedProducts)
            return;
        }
        const products = ProductService.getAll()
        res.status(200).json(products)
    },
    getById:(req: Request, res: Response)=>{
        // NaN - Not A Number
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
        const product = ProductService.getById(id)
        
        if (!product){
            res.status(404).json("product not found")
            return;
        }
        
        res.json(product)
    },
    create: async (req: Request, res: Response) => {
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
        if (!body.category) {
            res.status(422).json("category is required.")
            return
        }
        
        const product = await ProductService.create(body)
        if (!product) {
            res.status(500).json("Product creation error")
            return
        }
        res.status(201).json(product)
    },
    async update(req: Request, res: Response) {
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
        if (body.id){
            res.status(422).json("body must not consist id");
            return
        }
        const product = await ProductService.update(+id, body)
        if (!product) {
            res.status(500).json("Product creation error")
            return
        }
        res.status(200).json(product)
        
    },
    // delete(req, res) {
    // }
}


// module.exports = ProductController
