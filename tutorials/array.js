// Иммутабельность данных - принцип при котором данные не возможно поменять. Что-бы добавить что то новое мы создаем новую переменную

const product = {
    price: 100,
    name: '1'
}
// 
// const productWithDiscount = product

// console.log(product)

// productWithDiscount.price = productWithDiscount.price * 0.8
// console.log(product, productWithDiscount)

// {...product} - Используем spread оператор который "распаковывает" все свойства из обьекта ( копирует все его свойства )
const productWithDiscount = { ...product, price: product.price * 0.8 }

// productWithDiscount.price = productWithDiscount.price * 0.8

// console.log(product, productWithDiscount)

const {price} = productWithDiscount
// console.log(price)

const names = ['Artem', 'Oryna', "David"]

const names2 = [ ...names ]
names2.push('David')

const [name1, name2, name3] = names2

// console.log(names)
// console.log(names2)
console.log(name1, name2, name3)