const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"})
mongoose.set('strictQuery',false);
mongoose.connect(process.env.DB_URL,{useNewUrlParser:true})
.then( (data)=>{console.log('Connected to db')})
.catch((err)=>{console.log('Error Occurred while connecting to db',err.message)})