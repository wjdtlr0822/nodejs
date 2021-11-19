const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const { query } = require('express');

const ProductSchema = mongoose.Schema({
    imgsrc:{ //id
        type:String,
        require : true
    },
    productname:{ //name
        type : String,
        require : true
    },
    extra:{
        type : String,
        require : true
    },
    price:{
        type : Number,
        default:0,
        require : true,
    }
});
const Product = mongoose.model('Product',ProductSchema);

Product.findAll=function(){
    Product.find({});
}


module.exports=Product;