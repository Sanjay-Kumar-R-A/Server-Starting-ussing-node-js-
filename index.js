//Importing the required Packages
import http from 'http';
import dotenv from 'dotenv';
import express from 'express';

//to configure the dotenv package
dotenv.config();

//Port to run the server
const port = process.env.PORT || 5000;

//Express initialization
const app = express();

//Default route is used to avoid cannot get error
app.get('/',(req,res)=>{
    res.status(200).json({message:"Welcome to the Backened"})
})

//Route using the endpoint /post
app.get('/post',(req,res)=>{
    res.status(200).json({message:"Welcome to the Backened fa"})
})

//Creating or Starting server using Express JS
app.listen(port,()=>{
    console.log("Server is started and running successfully using Express JS");
})