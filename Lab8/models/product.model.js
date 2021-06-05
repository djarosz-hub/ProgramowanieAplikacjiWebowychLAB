const mongoose = require('mongoose');

// module.exports = class Product {
//     constructor(name, description, price){
//         this.id = Date.now();
//         this.name = name;
//         this.description = description;
//         this.price = price;
//     };
// }
const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
        name: String,
        description: String,
        price: Number,
        category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'}
    })
);
module.exports = Product;