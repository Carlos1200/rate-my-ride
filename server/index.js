const express=require('express');
const transport=require('./routes/transport');

//Create a new express application
const app=express();

//Define a port
const port=process.env.PORT || 4000;

//Define a routes
app.use('/transport',transport());

//Start the server
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});