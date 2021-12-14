const {Users} = require('../../db/models');

const auth = async(req, res) =>{
    try{
        const user = await Users.findOne({where: {email: req.params.email}})
        if(user.correctPassword(req.body.password)){
            //res.status(200).send('correct password!');
            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email
            });
        }else{
            res.status(500).send('wrong password');
        }
    }catch(err){
        res.status(500).send('wrong password');
    }
}

module.exports={auth};