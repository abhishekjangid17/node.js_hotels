const express = require('express');
const router = express.Router();
const MenuItem=require('./../models/MenuItem'); 

// POST route to add a menu
router.post('/',async(req,res)=>{
    try{
      const data = req.body
    
      // const existingPerson = await Person.findOne({ email: data.email });
            
      //       if (existingPerson) {
      //           return res.status(400).json({ error: 'Email already exists' });
      //       }
            
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
    
    })
  
  
     // GET method to get the menu
  router.get('/',async(req,res)=>{
    try{
      const data = await MenuItem.find();
      console.log('data fetched');
    res.status(200).json(data);
    }catch(err){
      console.log(err);
    res.status(500).json({error:'internal server error'});
    }
  })
  
  module.exports = router;