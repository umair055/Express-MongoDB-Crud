var express = require('express');
const { findById, findByIdAndDelete } = require('../models/models');
var router = express.Router();
var Products = require("../models/models");
/* GET home page. */
router.get('/', async function(req, res, next) {
  let product = await Products.find();
   return res.send(product);
});

router.get("/:id", async function(req, res, next) {
  let product = await Products.findById(req.params.id);
   return res.send(product);
});


router.post('/', async(req, res)=>{
  let pro = new Products();
  pro.name=req.body.name;
  pro.price=req.body.price;
  console.log(pro);
  await pro.save();
  return res.send(pro);
});

router.delete('/:id', async (req,res)=>{
  let prod= await Products.findByIdAndDelete(req.params.id);
  return res.send(prod);
  
})

router.put('/:id', async(req, res)=>{
  let pro = await Products.findById(req.params.id);
  pro.name=req.body.name;
  pro.price=req.body.price;
  await pro.save();
  return res.send(pro);
});

module.exports = router;
