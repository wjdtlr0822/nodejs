const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const products = require("./routes/products");
const boards = require('./routes/boards');
const users = require('./routes/users');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
    console.log('connected to database ' + config.database);
});
mongoose.connection.on('error',(err)=>{
    console.log('database error ' + err);
});


app.listen(port,()=>{
    console.log("server start on port "+port)
});


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users',users);
app.use("/images", express.static(path.join("images")));
app.use("/api", products);
app.use('/boards',boards);