const jwt = require("jsonwebtoken");
const config = require("config");
function auth(req,res,next){
let token = req.header("x-auth-token");
let user = jwt.verify(token, config.get("jwtPrivateKey"));
req.user=user;
next();
};

module.exports=auth;