module.exports = class Product {
    constructor(name, description, price){
        this.id = Date.now();
        this.name = name;
        this.description = description;
        this.price = price;
    };
}