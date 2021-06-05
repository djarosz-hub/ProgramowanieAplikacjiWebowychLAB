const Product = require('../models/product.model');
const Category = require('../models/category.model');
// const products = [];


exports.getAll = (req, res) => {
    // res.status(200).send(products);
    Product.find().populate('category').exec(function (err, products) {
        res.status(200).send(products);
    });
};

exports.add = (req, res) => {
    //#region 
    // const request = req.body;
    // const product = new Product(request.name, request.description, request.price);
    // products.push(product);
    // res.status(201).send(product);
    // console.log('product added');
    //#endregion
    Category.findOne({ _id: req.body.category}).exec((err,category) => {
        const product = new Product({
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          category: category._id
        });    
        product.save(err => {
          if (err) {
            console.log(err);
            return false;;
          }
          return true;
        });  
      });
}
exports.update = (req, res) => {
    // Product.find({name:"telewizor"}).
    Product.updateOne({ _id: req.body.id },
        {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
        }
    ).exec();

    //#region 
    // const prodId = req.body.id;
    // const prodName = req.body.name;
    // const prodDesc = req.body.description;
    // const prodPrice = req.body.price;
    // if (prodId) {
    //     const prodIndex = products.findIndex(el => el.id === +prodId);
    //     if (prodIndex >= 0) {
    //         if (prodName)
    //             products[prodIndex].name = prodName;
    //         if (prodDesc)
    //             products[prodIndex].description = prodDesc;
    //         if (prodPrice)
    //             products[prodIndex].price = prodPrice;
    //         res.status(200).send(`Product with id: ${prodId} successfully updated`);
    //         console.log('product updated');
    //         return;
    //     }
    // }
    // console.log('product not found');
    // res.status(204).send('No product found with this id');
    //#endregion
}
exports.delete = (req, res) => {
    Product.deleteOne({_id: req.body.id}).exec();
    //#region
    // const productId = req.params.id;
    // const newArr = products.filter(el => el.id !== +productId);
    // if (newArr.length === products.length) {
      //     res.status(204).send('No product found with this id');
      //     console.log('product not found');
      //     return;
      // }
      // products.length = 0;
      // newArr.forEach(el => products.push(el));
      
      // console.log(`succesfully deleted product with id: ${productId}`);
      // res.status(204).send(`succesfully deleted product with id: ${productId}`);
      //#endregion
    }
