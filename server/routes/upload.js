const express = require("express");
const { check } = require("express-validator");
const { uploadPicture } = require("../controller/uploadController");
const { fileValidation,validarJWT } = require("../middlewares");

const router = express.Router();

module.exports = function () {

    router.post("/",[
        validarJWT,
        fileValidation,
    ] ,uploadPicture);

    return router;

}