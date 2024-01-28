const {getAllCategories} = require ("../controllers/categoryController");

const getCategoriesHandler = async (req, res) => {
    
    try {
        const response = await getAllCategories();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getCategoriesHandler
}