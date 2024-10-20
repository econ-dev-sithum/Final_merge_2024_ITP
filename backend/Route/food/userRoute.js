const express = require('express');
const { loginUser, registerUser } = require('../../Controlers/food/userController');
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
