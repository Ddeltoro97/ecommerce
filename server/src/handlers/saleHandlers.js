const {createSale, getSaleByUserId}= require("../controllers/saleControllers");

const createSaleHandler = async(req,res) =>{
    const {address, value, sizes, userId, products} = req.body;
    try {
        const response = await createSale(address, value, sizes, userId, products);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getSaleHandler = async(req, res) =>{
    const {userId} = req.body;
    try {
        const response = await getSaleByUserId(userId);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    createSaleHandler,
    getSaleHandler
}