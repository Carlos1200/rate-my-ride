const express=require('express');
const {check}=require('express-validator');
const { newTransport } = require('../controller/transportController');
const {checkFields,validarJWT}=require('../middlewares');
const router=express.Router();

module.exports=function(){

    router.post('/',[
        validarJWT,
        check('name').notEmpty().withMessage('Name is required'),
        check('year').notEmpty().withMessage('Year is required'),
        check('year').isNumeric().withMessage('Year must be numeric'),
        check('year').isLength({min:4,max:4}).withMessage('Year must be 4 digits'),
        check('description').notEmpty().withMessage('Description is required'),
        check('photo').notEmpty().withMessage('Photo is required'),
        check('idUser').notEmpty().withMessage('User is required'),
        checkFields
    ],newTransport)


    return router;
}