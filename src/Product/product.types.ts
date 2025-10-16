import { Request, Response } from "express";


export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
}

export type ProductCreate = Omit<Product, "id">
export type ProductUpdate = Partial<Omit<Product, "id">>

// Контракты строго определяют задачи объектов или классов
export interface ProductServiceContract {
    getById: (id: number) => Product | undefined
    getAll: (take?: number) => Product[]
    create: (data: ProductCreate) => Promise<Product | null>
    update: (id: number, data: ProductUpdate) => Promise<Product | null>
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

export interface ProductControllerContract {
    getAll: (req: Request<object, Product[] | string, object, { take?: string }>,res: Response<Product[] | string>) => void,
    getById:(req: Request<{id: string}, Product | string, object>, res:Response <Product[] | string>) =>void,
    create: (req: Request<object, Product | string, ProductCreate, object>, res: Response<Product | string>) => Promise<void>,
    update: (req: Request<{id: number}, Product | string,ProductUpdate, object >, res: Response<Product | string>) => Promise<void>
}