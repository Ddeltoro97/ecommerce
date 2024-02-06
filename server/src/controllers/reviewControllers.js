const {Review, Product, User} = require("../db");
const {getUserByEmail} = require("./userControllers");
const {getProductByName} = require("./productControllers");

const createReview = async(title, body, rating, email, product) =>{
    const user = await getUserByEmail(email);
    const productToRate = await getProductByName(product);

    // console.log(user)

    const newReview = await Review.create({title, body, rating});

    await newReview.setUser(user.id);
    await newReview.setProduct(productToRate[0].id);


    return newReview;

}

const getReviewByUser = async(email) =>{
    const user = await getUserByEmail(email);

    const reviews = await Review.findAll({where: {UserId: user.id}});

    return reviews;

}

const getReviewByProduct = async(product) =>{
    const prod = await Product.findOne({where: {name: product}});

    console.log(prod)
    const reviews = await Review.findAll({where: {ProductId: prod.id}});

    return reviews;

}

module.exports = {
    createReview,
    getReviewByUser,
    getReviewByProduct
}