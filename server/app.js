const express = require("express");
const app = express();
const conn = require("./database/connection")
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});
const auth = require("./routers/auth")
const port = process.env.port || 4500;
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/api/user/auth",auth);

//listening on port
app.listen(port,()=>{console.log(`You are working on :${port}`)});