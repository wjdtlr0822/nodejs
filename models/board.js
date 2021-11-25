const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const { query } = require('express');


const BoardSchema = mongoose.Schema({

    name:{
        type : String,
        require : true
    },
    title:{
        type : String,
        require : true
    },
    content:{
        type : String,
        require : true,
    },
});

const Board = mongoose.model('Board',BoardSchema);



Board.addBoard=function(newBoard,callback){
    newBoard.save(callback);
} 

Board.getAll = function (callback) {
    Board.find(callback);
};

module.exports=Board;