const Category = require('../models/category.model');
const categories = [];


exports.getAll = (req, res) => {
    Category.find().exec(function (err, categories) {
        res.status(200).send(categories);
    });
};

exports.add = (req, res) => {
    const category = new Category({
        name: req.body.name
    });
    category.save(err => {
        if (err) {
            console.log(err);
            return false;
        }
        return true;
    })
    // const request = req.body;
    // const category = new Category(request.name);
    // categories.push(category);
    // res.status(201).send(category);
    // console.log('category added');
}
exports.update = (req, res) => {
    const catId = req.body.id;
    const catName = req.body.name;
    if (catId && catName) {
        Category.updateOne({ _id: catId },
            {
                name: catName
            }).exec();
    }
    //#region 

    // if (catId) {
    //     const catIndex = categories.findIndex(el => el.id === +catId);
    //     if (catIndex >= 0) {
    //         if (catName)
    //             categories[catIndex].name = catName;
    //         res.status(200).send(`Category with id: ${catId} successfully updated`);
    //         console.log('category updated');
    //         return;
    //     }
    // }
    // console.log('category not found');
    // res.status(204).send('No category found with this id');
    //#endregion
}
exports.delete = (req, res) => {
    const catId = req.body.id;
    if (catId) {
        Category.deleteOne({ _id: catId }).exec();
    }
    //#region 
    // const newArr = categories.filter(el => el.id !== +catId);
    // if (newArr.length === categories.length) {
    //     res.status(204).send('No category found with this id');
    //     console.log('category not found');
    //     return;
    // }
    // categories.length = 0;
    // newArr.forEach(el => categories.push(el));

    // console.log(`succesfully deleted category with id: ${catId}`);
    // res.status(204).send(`succesfully deleted category with id: ${catId}`);
    //#endregion
}