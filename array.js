// Иммутабельность данных - принцип при котором данные не возможно поменять. Что-бы добавить что то новое мы создаем новую переменную


const products = ["Prodcut 3", "Product 2", "Product 1"]

// ["Product 1"]

function reportProduct(){
    const product2 = copy(products).sort()
    // const products = [ "Product 1", "Product 2", "Prodcut 3"]
}

function deleteProduct() {
    products[0]
}
