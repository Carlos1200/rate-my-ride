const { response, request } = require('express');
const cn=require('../db');
const jwt = require('jsonwebtoken');



const validarJWT = async( req = request, res = response, next ) => {

    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        const { id } = jwt.verify( token, process.env.SECRET_KEY );

        // leer el usuario que corresponde al id
        cn.query(`SELECT * FROM users WHERE id=?`, [id], (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "Internal server error",
                    error: err
                });
            }
            if (result.length < 0) {
                return res.status(401).json({
                    message: "Token no válido - usuario no existe DB"
                });
            }else{
                req.usuario = result[0];
                return next();
            }
        });

    } catch (error) {

        // console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}




module.exports = {
    validarJWT
}