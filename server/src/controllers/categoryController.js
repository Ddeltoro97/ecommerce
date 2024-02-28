const {Category} = require ("../db");

const getAllCategories = async() =>{
    const categories = await Category.findAll();
    return categories;
}

const getCategoryByName = async(name) =>{
    const category = await Category.findOne({where: {name: name}});
    return category
}

module.exports = {
    getAllCategories,
    getCategoryByName
}