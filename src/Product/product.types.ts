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