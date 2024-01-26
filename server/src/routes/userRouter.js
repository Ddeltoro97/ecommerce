const {Router} = require("express");
const {createUserHandler, getUserHandler} = require("../handlers/userHandlers");

const userRouter = Router();

userRouter.post("/", createUserHandler);
userRouter.get("/", getUserHandler);

module.exports = userRouter;