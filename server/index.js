const express=require('express');
const transport=require('./routes/transport');
const user=require('./routes/user');
const upload=require('./routes/upload');
const cors=require('cors');
const fileUpload = require('express-fileupload');

//Create a new express application
const app=express();

//Enable CORS
app.use(cors());

//Enable body parsing
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Enable file upload
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/',
    createParentPath: true
}))

//Define a port
const port=process.env.PORT || 4000;

//Define a routes
app.use('/user',user());
app.use('/transport',transport());
app.use('/upload',upload());

//Start the server
app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});