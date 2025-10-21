import { Prisma, PrismaClient } from "../generated/prisma";

// CRUD
// Create Read Update Delete

const client = new PrismaClient()

async function createCategory(){
    try {
        const category = await client.category.create({
            data: {name: 'laptops'}
        })
        console.log(category)
    } catch (error) {
        client.$disconnect()
        console.log(error)
    }
}
async function createCategories() {
    try {
        const categories = await client.category.createMany({
            data: [{name: 'laptops'}, {name: 'monito'}]
        })
        console.log(categories)
    } catch (error) {
        client.$disconnect()
        console.log(error)
    }
}


async function createProduct(){
    try {
        const createProducts  = await client.product.create({
            // data: { name:"laptop", price:1200,category: {connect: {id: 1}}} // Подключение нового продукта к существующей категории по ID
            data: {
                name: "Phone 3",
                price: 300,
                categoryId: 2
                // category: {
                //     // connectOrCreate: {
                //     //     where: {
                //     //         name: "New Category"
                //     //     },
                //     //     create: {
                //     //         name: "New Category"
                //     //     }
                //     // }
                //     // connect: {
                //     //     id: 1
                //     // }
                //     connect: {
                //         name: "Phones"
                //     }
                //     // create: {
                //     //     name: "Phones"
                //     // }
                // }
            },
        }) 
        
    } catch (error) {
        client.$disconnect()
        console.log(error)
    }
}

async function deleteProduct(){
    try{
        const deletedProduct = await client.product.delete({
            where: {
                id: 2
            },
        })
        console.log(deletedProduct)
    }
    catch(error){
        client.$disconnect()
        console.log(error)
    }
}
// deleteProduct()

async function findCategory(){
    try{
        const foundCategory = await client.category.findUnique({
            where: {
                id: 1
            },
            // include - позволяет получить информацию о связях
            include: {
                products: true
            }
        })
        console.log(foundCategory)
    } catch(error){
        client.$disconnect()
        console.log(error)
    }
}
async function findProduct(){
    try{
        const foundProduct = await client.product.findUnique({
            where: {
                id: 4
            },
            // // include - позволяет получить информацию о связях
            include: {
                category: true
            },
            // // omit - параметры для ИСКЛЮЧЕНИЯ из получемых данных
            // omit: {
            //     name: true,
            // },
            // select - параметры для ПОЛУЧЕНИЯ из получаемых данных
            // select: {
            //     category: true
            // }
        })
        console.log(foundProduct)
    } catch(error){
        client.$disconnect()
        console.log(error)
    }
}
findProduct()
async function findProducts() {
    try {
        const products = await client.product.findMany({
            // where: {
            //     price: 1200
            // },
            include: {
                category: true
            },
        })
        console.log(products)
    } catch (error) {
        console.log(error);
        
    }
}

async function updateCategory() {
    try {
        const category = await client.category.update({
            where: {
                id: 2
            },
            data: {
                name: "Super Phones"
            }
        })
        console.log(category)
    } catch (error) {
        console.log(error)
    }
}
// updateCategory()
// createProduct()
// findProducts()



export type Category = Prisma.CategoryGetPayload<{}>

export type CategoryCreateInput= Prisma.ProductCreateInput

export type CategoryUncheckedCreateInput = Prisma.ProductUncheckedCreateInput

export type CategoryWhereUnique = Prisma.CategoryWhereUniqueInput

