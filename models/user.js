const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const { query } = require('express');

const UserSchema = mongoose.Schema({
    name:{ //id
        type:String,
        require : true
    },
    username:{ //name
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true
    },
    password:{
        type : String,
        require : true,
    },
    point:{
        type : Number,
        default:0,
        require:true
    },
    token: {
        type: String,
        required: false,
    }
});


const User = mongoose.model('User',UserSchema);

User.getUserById=function(id,callback){
    User.findById(id,callback);
}

User.getUserByName = function(name,callback){
    const query = {name : name};
    User.findOne(query,callback);
}

User.getUserByUserName=function(username,callback){
    const query={username:username};
    User.findOne(query,callback);
}

User.addUser=function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password=hash;
            newUser.save(callback);
        })
    })
}

User.point=function(userData,callback){
    User.updateOne({name:userData.name},{$set:{point : userData.point}},callback)
}


User.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword,hash,(err,Match)=>{
        if(err) throw err;
        callback(null,Match)
    });
}

User.deleteUser=function(id,callback){
    this.deleteOne({_id:id},callback)
}
User.getUserBytoken = function(token,callback){
    const query = {token : token};
    User.findOne(query,callback);
}

User.savetoken = function (username, token, callback) {
    const query = { username: username };
    const update = { token: token };
    User.findOneAndUpdate(
    query,
    update,
    { new: true, useFindAndModify: false },
    callback
    );
    };


module.exports=User;