const express = require("express");
const {auth} = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post('/signin', auth);

module.exports = authRouter;