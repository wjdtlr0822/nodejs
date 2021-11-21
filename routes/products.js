const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const storage = require("../helpers/storage");



router.get("/findallProduct", (req, res, next) => {
    Product.find({}, (err, products) => {
    res.json(products);
    });
});

router.post("/product",storage,(exports.postProduct = async (req, res) => {
    const productname = req.body.name;
    const extra = req.body.extra;
    const imagesrc = "http://localhost:3000/images/" + req.file.filename; // set path dynamically
    const price = req.body.price;
    const product = new Product({
    productname,
    imagesrc,
    extra,
    price,
    });
    console.log(product.imagesrc)
    console.log(product.extra)
    console.log(req.file.filename)
    const createdProduct = await product.save();
    res.status(201).json({
    product: {
        ...createdProduct._doc,
    },
    });
})
);

//product findall
router.get('/findall',(req,res)=>{
    const postList = Product.findAll()
    console.log(postList)
    res.json({data:postList})
    // const postList = User.find({})
    // console.log(postList)
    // res.json({data:postList})
})

module.exports = router;
