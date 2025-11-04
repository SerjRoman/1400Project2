import { CategoryServiceContract } from "./category.types";
import { CategoryRepository } from "./category.repository";

export const CategoryService: CategoryServiceContract = {
    
    getAll(take, skip) {
        return CategoryRepository.getAll(take, skip);
    },
    getById(id) {
        return CategoryRepository.getById(id);
    },
    create(data) {
        return CategoryRepository.create(data);
    },
    delete(id) {
        return CategoryRepository.delete(id);
    }
}
