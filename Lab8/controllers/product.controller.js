const Product = require('../models/product.model');
const products = [];


exports.getAll = (req, res) => {
    res.status(200).send(products);
}

exports.add = (req, res) => {
    const request = req.body;
    const product = new Product(request.name, request.description, request.price);
    products.push(product);
    res.status(201).send(product);
    console.log('product added');
}
exports.update = (req, res) => {
    const prodId = req.body.id;
    const prodName = req.body.name;
    const prodDesc = req.body.description;
    const prodPrice = req.body.price;
    if (prodId) {
        const prodIndex = products.findIndex(el => el.id === +prodId);
        if (prodIndex >= 0) {
            if (prodName)
                products[prodIndex].name = prodName;
            if (prodDesc)
                products[prodIndex].description = prodDesc;
            if (prodPrice)
                products[prodIndex].price = prodPrice;
            res.status(200).send(`Product with id: ${prodId} successfully updated`);
            console.log('product updated');
            return;
        }
    }
    console.log('product not found');
    res.status(204).send('No product found with this id');
}
exports.delete = (req, res) => {
    const productId = req.params.id;
    const newArr = products.filter(el => el.id !== +productId);
    if (newArr.length === products.length) {
        res.status(204).send('No product found with this id');
        console.log('product not found');
        return;
    }
    products.length = 0;
    newArr.forEach(el => products.push(el));

    console.log(`succesfully deleted product with id: ${productId}`);
    res.status(204).send(`succesfully deleted product with id: ${productId}`);
}