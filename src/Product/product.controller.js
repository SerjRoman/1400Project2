const ProductService = require('./product.service')

const ProductController = {
    getAll: (req,res)=>{ 
        console.log(req.query)      // C
        const take = req.query.take // C
        if (take) {                 // C
            if (isNaN(+take)){      // C
                res.status(400).json("is not a number") // C
                return; // C
            }
            const slicedProducts =  ProductService.getAll(take)
            res.status(200).json(slicedProducts)            // C
            return;
        }
        const products = ProductService.getAll()
        res.status(200).json(products)                      // C
    },
    getById:(req, res)=>{
        // NaN - Not A Number
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
    create: async (req, res) => { // R
        console.log(req.body)
        const body = req.body                   // C
        if (!body) {                            // C
            res.status(422).json("Body is required.")
            return
        }
        if (!body.name) {                                 // C / S
            res.status(422).json("name is required.")
            return
        }
        if (!body.price) {                                // C / S
            res.status(422).json("price is required.")
            return
        }
        if (!body.category) {                             // C / S
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
    // update(req, res) {
    // },
    // delete(req, res) {
    // }
}


module.exports = ProductController
