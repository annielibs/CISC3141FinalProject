const express = require("express");
const {auth} = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post('/signin/:email', auth);

module.exports = authRouter;