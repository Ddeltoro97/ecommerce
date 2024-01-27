const {getAllProducts, getProductById, getProductByName} = require("../controllers/productControllers");

const getProductsHandler = async (req, res) =>{
    const {string} = req.body;

    if(string){
        try {
            const response = await getProductByName(string);
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json({error: error.message});
        }
        return;
    }

    try {
        const response = await getAllProducts();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getProductByIdHandler = async(req, res) =>{
    const {id} = req.params;
    try {
        const response = await getProductById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getProductsHandler,
    getProductByIdHandler
}