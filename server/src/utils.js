const axios = require("axios");
const {Product, Category} = require("./db");

const fetchInfo = async () =>{
    const categoryCount = await Category.count();
    if(categoryCount == 0){
        const {data} = await axios.get('https://api.escuelajs.co/api/v1/categories/');
        const categories = data.map(category => ({
            id: category.id,
            name: category.name
        }))
        // console.log(categories);
        await Category.bulkCreate(categories);
        console.log("Categories added");
        const response = await axios.get("https://api.escuelajs.co/api/v1/products");
        // console.log(response.data);
        const products = response.data.map(product =>({
            id: product.id,
            name: product.title,
            image: product.images[0],
            price: product.price,
            description: product.description,
            CategoryId: product.category.id
        }))
        await Product.bulkCreate(products);
        console.log("Products added")
    }else{
        console.log("Data is already in, Skipping API Request")
    }
}

module.exports = {
    fetchInfo
}