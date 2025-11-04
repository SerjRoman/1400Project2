import { CategoryControllerContract } from "./category.types";
import { CategoryService } from "./category.service";

export const CategoryController: CategoryControllerContract = {
    async getAll (req, res) {
        let skip
        let take
        if (req.query.skip) {
            skip = +req.query.skip
            if (isNaN(skip)) {
                res.status(400).json("Skip must be a number" )
                return
            }
        }
        
        if (req.query.take) {
            take = +req.query.take
            if (isNaN(take)) {
                res.status(400).json("Take must be a number" )
                return
            }
        }
        try {
            const categories = await CategoryService.getAll(skip, take)
            res.status(200).json(categories)
        } catch (error) {
            res.status(500).json("Server internal error")
        }       
    },
    async getById(req, res) {
        let id = req.params.id
        if (!id) {
            res.status(400).json("id is required" )
            return
        }
        if (isNaN(+id)) {
            res.status(400).json("id must be a number" )
            return
        }
        try {
            const category = await CategoryService.getById(+id)
            res.status(200).json(category)
        } catch (error) {
            res.status(500).json("Server internal error")
        }
    },
    async create(req, res) {
        const body = req.body
        if(!body){
            res.status(422).json("Body is required")
            return
        }
        if(!body.name){
            res.status(422).json("Name is required")
            return
        }
        try {
            const category = await CategoryService.create(body)
            
            res.status(201).json(category)
        } catch (error) {
            res.status(500).json("the category is not created")
        }
    },
    async delete(req, res) {
        const id = req.params.id
        if (!id) {
            res.status(400).json("id is required" )
            return
        }
        if (isNaN(+id)) {
            res.status(400).json("id must be a number" )
            return
        }
        try{
            const deletedCategory = CategoryService.delete(+id)
            res.status(200).json(deletedCategory)
        }catch (error){
            console.log(error)
            res.status(500).json("the category is not deleted")
        }
    }
}