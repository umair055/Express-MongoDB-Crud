const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    email:String,
    password:String
});

var users = mongoose.model('users',userSchema);
 module.exports= users;