const express=require('express');
const router=express.Router();

module.exports=function(){

    router.get('/',(req,res)=>{
        res.json({"transport":"transport"});
    })


    return router;
}