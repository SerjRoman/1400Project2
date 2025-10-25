import { Request, Response } from "express"
import { Prisma } from "../generated/prisma"

export type Product = Prisma.ProductGetPayload<{}>
export type ProductCreate = Prisma.ProductUncheckedCreateInput
export type ProductUpdate = Prisma.ProductUncheckedUpdateInput

// Unchekced - {categoryId} | Checked - {category: {connect: {id: categoryId}}}
// Контракты строго определяют задачи объектов или классов
export interface ProductServiceContract {
    getById: (id: number) => Promise<Product | null>
    getAll: (take?: number) => Promise<Product[]>
    create: (data: ProductCreate) => Promise<Product | null>
    update: (id: number, data: ProductUpdate) => Promise<Product | null>
}
// GetById, Update, Create, GetAll
export interface ProductRepositoryContract {
    getById: (id: number) => Promise<Product | null>
    getAll: (take?: number) => Promise<Product[]>
    create: (data: ProductCreate) => Promise<Product>
    update: (id: number, data: ProductUpdate) => Promise<Product | null>
}
export interface ProductControllerContract {
    getAll: (req: Request<object, Product[] | string, object, { take?: string }>, res: Response<Product[] | string>) => Promise<void>,
    getById: (req: Request<{ id: string }, Product | string, object>, res: Response<Product | string>) => Promise<void>,
    create: (req: Request<object, Product | string, ProductCreate, object>, res: Response<Product | string>) => Promise<void>,
    update: (req: Request<{ id: number }, Product | string, ProductUpdate, object>, res: Response<Product | string>) => Promise<void>
}

// Request<P, ResBody, ReqBody, ReqQuery, Locals>
// P - динамічний параметри (req.params)
// ResBody - відповідь контроллера, те, що робимо у res.json
// ReqBody - тіло запиту (при POST/PATCH) в req.body
// ReqQuery - query параметри запиту, те, що в req.body
// Locals поки не чіпаємо

// Response<ResBody, Locals>
// ResBody - відповідь контроллера, те, що робимо у res.json
// Locals поки не чіпаємо