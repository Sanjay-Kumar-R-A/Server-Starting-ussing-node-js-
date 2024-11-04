//Importing the required Packages
import http from 'http';
import dotenv from 'dotenv';

//to configure the dotenv package
dotenv.config();

//Port to run the server
const port = process.env.PORT || 5000;

//Starting or Creating a Server using nodeJS http package
const app = http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/plain"})
    res.write("Hello welcome to the backened")
    res.end();
})
app.listen(port,()=>{
    console.log("Server is started and running succesfully");
})