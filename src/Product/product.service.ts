import { Product, ProductServiceContract } from './product.types'
import { ProductRepository } from './product.repository'

export const ProductService: ProductServiceContract= {
    getAll (take) {
        return ProductRepository.getAll(take)
    },
    getById (id){
        return ProductRepository.getById(id)
    },
    create (data){
        return ProductRepository.create(data)
    },
    update(id, data) {
        return ProductRepository.update(id, data)
    },
}
