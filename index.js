const http = require("http");
const fs = require("fs")

const server = http.createServer()
const content = "<h1> Hello World </h1><p> This is Charan... </p>"
fs.writeFile("index.html",content,(err)=>{
    console.log(err);
})
server.on("request",(req,res)=>{
    fs.readFile("index.html",(err,data)=>{
       if(err){
        console.log(err);
       }else{
        res.end(data)
       }
    })
})

server.listen(5000,"localhost",()=>console.log("am up"))