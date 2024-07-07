const sequence = {
    _id:1,
    get id(){return this._id++}
}

const products = {}

const saveProduct = (product) => {
    if(!product.id)
        product.id = sequence
        products[product.id] = product
    return product
}

const getProduct = (id) => {
    return products[id] || {}
}
const getProducts = (id) => {
    return Object.values(products)
}

module.exports = {saveProduct,getProduct,getProducts}



