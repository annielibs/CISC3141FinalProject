const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');
const express = require('express');
const userRouter = express.Router();

userRouter.get('/',getAllUsers);
userRouter.get('/:email', getSingleUser);
userRouter.post('/create-user',createUser);
userRouter.patch('/update-user/:email',updateUser);
userRouter.delete('/delete-user/:email',deleteUser);
module.exports= userRouter;