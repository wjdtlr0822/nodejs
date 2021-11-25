const express = require('express');
const router=   express.Router();
const Board = require('../models/board');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/database');
const Product = require('../models/product');
const bcrypt = require('bcryptjs');

router.post('/boardwrite',(req,res)=>{
    let newBoard = new Board({
        name : req.body.name,
        title : req.body.title,
        content : req.body.content
    });

    Board.addBoard(newBoard,(err,board)=>{
        if(err)
        {
            res.json({success:false,msg:"등록 실패"});
        }
        else{
            
            res.json({success:true,msg:"등록 성공"});
        }
    });

});


router.post('/boardupdate',(req,res)=>{

    let UpdateBoard = new Board({
        name : req.body.name,
        title : req.body.title,
        content : req.body.content,
    });

    console.log(UpdateBoard.name);
    console.log(UpdateBoard.title);
    console.log(UpdateBoard.content);


            Board.updateOne({name:UpdateBoard.name},
            {$set:{title: UpdateBoard.title , content:UpdateBoard.content} }, 
            err => {
                if(err){
                    console.log("Board 업데이트 실패");
                    console.error(err);
                }
                console.log("Board 업데이트 성공");
            })
});

router.post('/boardelete',(req,res)=>{
    let DeleteBoard = new Board({
        name : req.body.name,
        title : req.body.title,
        content : req.body.content,
    });

    console.log("여까진 뜨겟지");

    Board.deleteOne({title:DeleteBoard.title},{},  err => {
        if(err){
            console.log("Board 업데이트 실패");
            console.error(err);
        }
        console.log("Board 업데이트 성공");
    });

});


router.get("/Boardlist", (req, res, next) => {
    Board.getAll((err, boards) => {
    if (err) throw err;
    res.json(boards);
    });
});
    

module.exports = router;