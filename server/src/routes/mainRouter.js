const { Router } = require("express")
const productRouter = require("./productRouter");
const userRouter = require("./userRouter");
const saleRouter = require("./saleRouter");
const categoryRouter = require("./categoryRouter");
const reviewRouter = require("./reviewRouter");

const mainRouter = Router();

mainRouter.use("/products", productRouter);
mainRouter.use("/users", userRouter);
mainRouter.use("/sale", saleRouter);
mainRouter.use("/categories", categoryRouter);
mainRouter.use("/reviews", reviewRouter);


module.exports = mainRouter;