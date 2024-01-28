const {Review, Product, User} = require("../db");
const {getUserByUsername} = require("./userControllers");
const {getProductByName} = require("./productControllers");

const createReview = async(title, body, rating, username, product) =>{
    const user = await getUserByUsername(username);
    const productToRate = await getProductByName(product);

    // console.log(user)

    const newReview = await Review.create({title, body, rating});

    await newReview.setUser(user.id);
    await newReview.setProduct(productToRate[0].id);


    return newReview;

}

module.exports = {
    createReview
}