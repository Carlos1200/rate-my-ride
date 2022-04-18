const cn=require('../db');

exports.newTransport = async (req, res, next) => {
    try {
        const {name,year,description,photo,idUser} = req.body;
        const sql=`INSERT INTO tranports (name,year,description,photo,idUser) VALUES (?,?,?,?,?)`;
        await cn.query(sql,[name,year,description,photo,idUser],async (err,result)=>{
            if(err){
                return res.status(500).json({
                    message:'Internal server error',
                    error:err
                });
            }else{
                if(result.affectedRows>0){
                    res.status(201).json({
                        message:'Transport created',
                    });
                    next();
                }else{
                    res.status(500).json({
                        message:'Transport not created'
                    });
                    next();
                }
            }
        });
    } catch (error) {
        console.log({ error });
    }
}