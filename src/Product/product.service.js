const path = require("path")
const fs = require("fs")
const fsPromises = require("fs/promises")

// Получаем путь к файлу products.json
const productsPath = path.join(__dirname, "products.json")
// Получаем данные из файла с помощью readFileSync в строковом формате
// Т.к. данные строковые но в формате жсона мы можем переделать из в типы данных js с помощью  JSON.parse
const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))


const ProductService = {
    getAll (take){
        if(!take){
            return products
        }
        return products.slice(0, +take)
    },
    getById (id){
        const product = products.find((pr)=>{
            // true/false
            const isMatch = pr.id === id
            return isMatch   
        })
        return product
    },
    async create (data){
        try{
            const newProduct = { ...data, id: products.length + 1 }
            products.push(newProduct) // Repo
            await fsPromises.writeFile(productsPath, JSON.stringify(products, null, 4)) // Repo
            console.log(newProduct) // C
            return newProduct
        
        } catch (error){
            console.log(error)
            return null
        }
    }
}
module.exports = ProductService