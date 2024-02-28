const axios = require("axios");
const {Product, Category} = require("./db");
const {getCategoryByName} = require("./controllers/categoryController")

const fetchInfo = async () =>{
    const categoryCount = await Category.count();
    if(categoryCount == 0){
        const {data} = await axios.get('https://fakestoreapi.com/products/categories');
        const categories = data.map(category => ({
            name: category
        }))
        // console.log(categories);
        await Category.bulkCreate(categories);
        console.log("Categories added");
        const response = await axios.get("https://fakestoreapi.com/products");
        // console.log(response.data);
        const products = response.data.map(product =>({
            id: product.id,
            name: product.title,
            image: product.image,
            price: product.price,
            description: product.description,
            rate: product.rating.rate,
            clicks: product.rating.count,
        }
        ))
        // console.log(products)

        for(let i = 0; i < response.data.length; i++){
            const id = await relateProducts(response.data[i]);
            // console.log(id);
            products[i] = {
                ...products[i],
                CategoryId: id
            }
        }


        await Product.bulkCreate(products);
        console.log("Products added")


    }else{
        console.log("Data is already in, Skipping API Request")
    }
}

const relateProducts = async (product) =>{
    const category = await getCategoryByName(product.category);
    return category.id
    
}

module.exports = {
    fetchInfo
}