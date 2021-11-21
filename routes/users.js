const express = require('express');
const router=express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/database');


// back - end



//user find all
router.get("/findalluser", (req, res, next) => {
    User.find({}, (err, users) => {
    res.json(users);
    });
});

router.post('/register',(req,res)=>{
    let newUser = new User({
        name : req.body.name,
        email : req.body.email,
        username : req.body.username,
        password : req.body.password
    });

    User.getUserByName(newUser.name,(err,user)=>{  // err,user은 임의로 사용하는 것 그냥 username이 있으면 user, 없으면 err 로 생각하면 편하다.
        if(err) throw err;
        if(user)
        {
            return res.json({success:false,msg:"이미 같은 이름이 존재합니다."});
        }
        else
        {
            User.addUser(newUser,(err,user)=>{
                if(err)
                {
                    res.json({success:false,msg:"등록 실패"});
                }
                else{
                    res.json({success:true,msg:"등록 성공"});
                }
            });
        }
    });
});

router.post('/authenticate',(req,res,next)=>{
    const name = req.body.name;
    const password = req.body.password;
    User.getUserByName(name,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg:'사용자가 없음'});
        }
        User.comparePassword(password,user.password,(err,isMatch)=>{
            if(err) throw err;
            if(isMatch){
                let tokenUser={
                    _id:user._id,
                    name:user.name,
                    username:user.username,
                    email:user.email
                }
                const token = jwt.sign({data:tokenUser},config.secret,{expiresIn:604800});
                res.json({
                    success:true,
                    token:token,
                    user:tokenUser
                });
            }
            else{
                return res.json({success:false, msg:"실패"})
            }
        })
    })
})


router.get('/login',(req,res,next)=>{
    res.send('login page');
});

router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    res.json({
        user:{
            name:req.user.name,
            username:req.user.username,
            email:req.user.email
        }
    })
});

module.exports = router;