const cn=require('../db');

exports.createUser=async ({name,email,password})=>{
    const sql=`INSERT INTO users (name,email,password) VALUES (?,?,?)`;
    const result=await cn.query(sql,[name,email,password]);
    return result;
}