import path from 'path'
import fs from 'fs'
import fsPromises from 'fs/promises'


// {
//         "id": 1,
//         "name": "product1",
//         "price": 50,
//         "category": "keyboards"
//     },


// Получаем путь к файлу products.json
const productsPath = path.join(__dirname, "products.json")
// Получаем данные из файла с помощью readFileSync в строковом формате
// Т.к. данные строковые но в формате жсона мы можем переделать из в типы данных js с помощью  JSON.parse
const products: {
    id: number,
    name: string,
    price: number,
    category: string
}[] = JSON.parse(fs.readFileSync(productsPath, "utf-8"))


export const ProductService = {
    getAll (take?: number){
        if(!take){
            return products
        }
        return products.slice(0, +take)
    },
    getById (id: number){
        const product = products.find((pr)=>{
            // true/false
            const isMatch = pr.id === id
            return isMatch   
        })
        return product
    },
    async create (data: {
        name: string,
        price: number,
        category: string 
    }){
        try{
            const newProduct = { ...data, id: products.length + 1 }
            products.push(newProduct)
            await fsPromises.writeFile(productsPath, JSON.stringify(products, null, 4))
            console.log(newProduct)
            return newProduct
        
        } catch (error){
            console.log(error)
            return null
        }
    }
}
