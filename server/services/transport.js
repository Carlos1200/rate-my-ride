const cn=require('../db');

const getTransports=async (req,res)=>{
    const sql=`SELECT * FROM transports`;
    const result=await cn.query(sql);
    res.json(result);
}

module.exports={
    getTransports
}