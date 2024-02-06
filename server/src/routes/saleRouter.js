const {Router} = require("express");
const {createSaleHandler, getSaleHandler} = require("../handlers/saleHandlers");

const saleRouter = Router();

saleRouter.post("/", createSaleHandler);
saleRouter.get("/", getSaleHandler)


module.exports = saleRouter;