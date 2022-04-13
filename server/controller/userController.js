const bcrypt = require('bcryptjs');
const { createJwt } = require('../helper');

const {createUser}=require('../services/user');

exports.createUser = async (req, res,next) => {
    const { name, email, password } = req.body;
    try {
        //encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        //create user
        const user = await createUser({ name, email, password: hashPassword });
        //create token
        const token = await createJwt(user);
        //send response
        res.status(201).json({
            message: 'User created',
            token
        });


    } catch (error) {
        console.log({ error });
        next(error);
    }
}