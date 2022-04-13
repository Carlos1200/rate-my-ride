const express=require('express');
const {check,param}=require('express-validator');
const router=express.Router();
const {createUser}=require('../controller/userController');

const {checkFields} =require('../middlewares');

module.exports=function(){

    router.post('/',[
        check('name').notEmpty().withMessage("Name is required"),
        check('email').notEmpty().withMessage("Email is required"),
        check('email').isEmail().withMessage("Email is not valid"),
        check('password').notEmpty().withMessage("Password is required"),
        check('password').isLength({min:6}).withMessage("Password must be at least 6 characters"),
        checkFields
    ],createUser);

    return router;
}