const express=require('express');
const transport=require('./routes/transport');
const user=require('./routes/user');

//Create a new express application
const app=express();

//Enable body parsing
app.use(express.json());

// app.use(express.urlencoded({extended:true}));

//Define a port
const port=process.env.PORT || 4000;

//Define a routes
app.use('/user',user());
app.use('/transport',transport());

//Start the server
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});