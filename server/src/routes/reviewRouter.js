const {Router} = require("express");
const {createReviewHandler, getReviewHandler} = require("../handlers/reviewHandlers");

const reviewRouter = Router();

reviewRouter.post("/", createReviewHandler);
reviewRouter.get("/", getReviewHandler);


module.exports = reviewRouter;