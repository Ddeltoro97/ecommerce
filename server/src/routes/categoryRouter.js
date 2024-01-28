const {Router} = require("express");
const {getCategoriesHandler} = require("../handlers/categoryHandlers")

const categoryRouter = Router();

categoryRouter.get("/", getCategoriesHandler);

module.exports = categoryRouter;