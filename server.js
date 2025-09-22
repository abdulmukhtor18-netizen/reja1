console.log('Web serverni boshlash');
const express = require("express");
const app = express();
const http =require("http");
// 1 express ma'lumotiga bog'liq kodlar kirish kodlar
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// 2 Session code

// 3 Views code
app.set("views","views");
app.set("view engine","ejs");
// 4.Routing code
app.get("/", function(req, res){
    res.send("Assalomu alaykum! Bu asosiy sahifa.");
});

app.get("/hello",function(req,res){
    res.end(`<h1 style="background: red">HELLO WORLD by Abdulmukhtor</h1>`);
});
app.get("/gift",function(req,res){
    res.end("siz sovg'alar bo'limidasiz");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT,function(){
    console.log(`The server is running succesfully on port:${PORT}`);
});