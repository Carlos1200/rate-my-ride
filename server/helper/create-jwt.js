const jwt=require('jsonwebtoken');
require('dotenv').config();

const createJwt=user=>{
    const {id,name,email}=user;

    return jwt.sign({id,name,email},process.env.SECRET_KEY,{expiresIn:'7d'});
}

module.exports={
    createJwt
}