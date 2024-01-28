const {createReview} = require("../controllers/reviewControllers");

const createReviewHandler = async(req, res) =>{
    const {title, body, rating, username, product} = req.body;

    try {
        const response = await createReview(title, body, rating, username, product);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    createReviewHandler
}