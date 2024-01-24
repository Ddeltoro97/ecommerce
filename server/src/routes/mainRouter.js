const { Router } = require("express")
const productRouter = require("./productRouter");
const userRouter = require("./userRouter");
const cartRouter = require("./cartRouter");
const saleRouter = require("./saleRouter");

const mainRouter = Router();

mainRouter.use("/products", productRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/cart", cartRouter);
mainRouter.use("/sale", saleRouter);


module.exports = mainRouter;