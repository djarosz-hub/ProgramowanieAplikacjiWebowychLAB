module.exports = class Category {
    constructor(name){
        this.id = Date.now();
        this.name = name;
    };
}