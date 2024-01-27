const {Product, Category} = require("../db");

const getAllProducts = async() =>{
    const allProducts = await Product.findAll();
    return allProducts;
}

const getProductById = async(id) =>{
    const product = await Product.findByPk(id);
    return product;
}

const getProductByName = async(string) =>{
    const allProducts = await getAllProducts();
    const filteredProducts = allProducts.filter((product) =>{
        return(
            product.name.toLowerCase().includes(string)
        )
    })

    return filteredProducts;
}

const getProductsByCategory = async(name) =>{
    const allProducts = await getAllProducts();
    const category = await Category.findOne({where: {name: name}});

    const key = category.id;

    const filteredProducts = allProducts.filter((product) =>{
        if (product.CategoryId === key){
            return product;
        }
    })
    return filteredProducts;
}


module.exports = {
    getAllProducts,
    getProductById,
    getProductByName,
    getProductsByCategory
}