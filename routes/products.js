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
    const imgsrc = "http://localhost:3000/images/" + req.file.filename; //수정하기
    const price = req.body.price;
    const product = new Product({
    productname,
    imgsrc,
    extra,
    price,
    });
    const createdProduct = await product.save();//수정하기
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

router.post("/delete",(req,res,next)=>{
    Product.deleteUser(req.body._id,(err,ok)=>{
        if(err) throw err;
        if(ok){
            res.json({
                msg: req.body.productname +" 삭제가 완료되었습니다."
            })
        }
    })
})

module.exports = router;
