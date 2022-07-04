var express = require('express');
var router = express.Router();
var Users = require('../models/user')
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require("config");
var auth = require("../middlewares/auth");


router.post("/register", async (req, res)=> {
  let user = new Users();
  user.email=req.body.email;
  user.password=req.body.password;
  let salt =await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password,salt);
  console.log(user);
  await user.save();
  return res.send(user);
});

router.post("/login", async (req, res)=> {
 let user = await Users.findOne({email:req.body.email});
 let isValid =await bcrypt.compare(req.body.password, user.password);
 if(!isValid) return res.status(401).send("Invalid Password");
 let token = jwt.sign({_id:user._id, email:user.email}, config.get('jwtPrivateKey'))
 res.send(token);
});

module.exports = router;
