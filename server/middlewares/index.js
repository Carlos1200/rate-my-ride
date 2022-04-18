const checkFields =require('./field-validation');
const userExist = require('./user-exist');
const validarJWT = require('./validar-jwt');
const fileValidation = require('./file-validate');

module.exports={
    ...checkFields,
    ...userExist,
    ...validarJWT,
    ...fileValidation
}