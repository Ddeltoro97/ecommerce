const {createReview, getReviewByUser, getReviewByProduct} = require("../controllers/reviewControllers");

const createReviewHandler = async(req, res) =>{
    const {title, body, rating, email, product} = req.body;

    try {
        const response = await createReview(title, body, rating, email, product);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getReviewHandler = async(req, res) =>{
    const{email, prod} = req.body;
    
    if(email){
        try {
            const response = await getReviewByUser(email);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }

    if(prod){
        try {
            const response = await getReviewByProduct(prod);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }
}

module.exports = {
    createReviewHandler,
    getReviewHandler
}