const mongoose = require('mongoose');

const schema=mongoose.Schema({
    name:String,
    price:Number
});

var model = mongoose.model('products',schema);
 module.exports= model;