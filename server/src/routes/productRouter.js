const {Router} = require("express");
const {getProductsHandler, getProductByIdHandler} = require("../handlers/productHandlers")

const productRouter = Router();

productRouter.get("/", getProductsHandler);
productRouter.get("/:id", getProductByIdHandler);

module.exports = productRouter;