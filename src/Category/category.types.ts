import { Prisma } from "../generated/prisma"
import { Request, Response } from "express"

type Category = Prisma.CategoryGetPayload<{}>
type CategoryCreate = Prisma.CategoryUncheckedCreateInput




// getAll, getById, create, delete
export interface CategoryControllerContract {
    getAll: (req: Request<object, Category[] | string, object, {take?: string, skip?: string}>, res: Response<Category[] | string>) => Promise<void>
    getById: (req: Request<{id: string}, Category | string | null>, res: Response<Category | string | null> ) => Promise<void>
    create: (req: Request<object, Category | string, CategoryCreate>, res: Response<Category | string>) => Promise<void>
    delete: (req: Request<{id: string}, Category | string>, res: Response<Category | string>) => Promise<void>
}

export interface CategoryRepositoryContract {
    getAll: (take?: number, skip?: number) => Promise<Category[]>
    getById: (id: number) => Promise< Category | null>
    create: (data: CategoryCreate) => Promise<Category>
    delete: (id: number) => Promise<Category>
} // 

export interface CategoryServiceContract{
    getAll: (take?: number, skip?: number) => Promise<Category[]>
    getById: (id: number) => Promise<Category | null>
    create: (data: CategoryCreate) => Promise<Category>
    delete: (id: number) => Promise<Category>
}