const mongoose = require('mongoose');

// module.exports = class Category {
//     constructor(name){
//         this.id = Date.now();
//         this.name = name;
//     };
// }
const Category = mongoose.model(
    "Category",
    new mongoose.Schema({
        name: String,
    })
);
module.exports = Category;