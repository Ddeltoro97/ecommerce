const {Router} = require("express");
const {createReviewHandler} = require("../handlers/reviewHandlers");

const reviewRouter = Router();

reviewRouter.post("/", createReviewHandler);


module.exports = reviewRouter;