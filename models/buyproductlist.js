const mongoose = require("mongoose");
const { query } = require("express");

const ProductListSchema = mongoose.Schema({
  name: {
    //id
    type: String,
    require: true,
  },
  imgsrc: {
    //id
    type: String,
    require: true,
  },
  productname: {
    //name
    type: String,
    require: true,
  },
  extra: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  num: {
    // 갯수
    type: Number,
    require: true,
  },
});
const ProductList = mongoose.model("ProductList", ProductListSchema);

ProductList.addBuyList = function (newProductList, callback) {
  newProductList.save(callback);
};

ProductList.findListByName = function (name, callback) {
  const query = { name: name };
  ProductList.find(query, callback);
};

module.exports = ProductList;
