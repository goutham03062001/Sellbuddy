const express = require("express");
const router = express.Router();
const User = require("../models/Auth");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

//@route    POST api/user/signup
//@desc     user signup
//@access   Public
router.post('/signup',async(req,res)=>{
    try {
        const{name,email,password} = req.body;
        if(!name || !email || !password){
            return res.send('Please fill all the fields')
        }
        else{
            //find the existing email
            const isExisted = await User.findOne({email});
            if(!isExisted){
                const newUser = new User({name,email,password});

                //hashing password
                const salt = await bcrypt.genSalt(10);
                newUser.password = await bcrypt.hash(password,salt);
                const payload = {
                    user:{
                        id : newUser.id
                    }
                }
                jwt.sign(payload,process.env.JSON_SECRET,{expiresIn:36000},(err,data)=>{
                    if(err){
                        return res.send(err.message)
                    }
                    else{
                        res.json(data)
                    }
                })
                await newUser.save();
                
            }
            else{
                res.send('This email is already existed')
            }
                

        }
    } catch (error) {
        console.log('Error Occurred')   
    }
})



//@route    POST api/user/login
//@desc     user login
//@access   Public
router.post('/login',async(req,res)=>{
    try {
        const{email,password} = req.body;
        if(!email || !password){
            return res.send('Please fill all the fields')
        }
        else{
            //find the existing email
            const isExisted = await User.findOne({email});
            if(isExisted){
                const actualPassword = isExisted.password;
                bcrypt.compare(password,actualPassword,(err,success)=>{
                    if(err){
                        return res.send('Password is wrong')
                    }
                    if(success)
                    {
                        //generate token
                        const payload = {
                            user:{
                                id: isExisted.id
                            }
                        }
                        jwt.sign(payload,process.env.JSON_SECRET,{expiresIn:36000},(err,token)=>{
                            if(err){return res.send(err)}
                            if(token){
                                res.json({token})
                            }
                        })
                    }
                    if(!success){
                        return res.send('passwords do not match ')
                    }
                })
                    
                
                
            }
            else{
                res.send('This email is not existed')
            }
                

        }
    } catch (error) {
        console.log('Error Occurred')   
    }
})

module.exports = router;