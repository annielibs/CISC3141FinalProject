const {User} = require('../../db/models');
const {Diaries} = require('../../db/models');

const getAllUsers = async(req, res) =>{
    try{
        const users = await User.findAll({ include: Diaries})
        res.status(200).send(users);
    }catch(err){
        console.error(err);
        res.status(500).send('No users Found');
    }
}

const getSingleUser = async(req, res) =>{
    try{
        const user = await User.findOne({where: {email: req.params.email}});
        res.status(200).send(user);
    }catch(err){
        console.error(err);
        res.status(500).send(`Unable to find user with ${req.params.email}`);
    }
}

const createUser = async(req, res) =>{
    try{
        await User.create({
            username: req.body.username,
            email: req.body.email
        })
        res.status(200).send('user created');
    }catch(err){
        console.error(err);
        res.status(500).send('Unable to create a user');
    }
}

const updateUser = async(req, res) =>{
    try{
        const user = await User.findOne({
            where: {
                email: req.params.email
            }
        });
        await user.update(req.body);
        res.status(200).send('updated user');

    }catch(err){
        res.status(500).send('Unable to update user');
    }
}

const deleteUser = async(req, res) =>{
    try{
        await User.destroy({where: {email: req.params.email}});
        res.status(200).send('deleted user');

    }catch(err){
        res.status(500).send('unable to delete user');
    }
}

module.exports={getAllUsers,getSingleUser, createUser, updateUser, deleteUser};