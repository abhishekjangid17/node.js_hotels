const express = require('express')
const app = express();
const db =require('./db');
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3002;

app.get('/', function (req, res){
  res.send('welcome to our hotel')
});



// import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');

// use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

 
app.listen(3002, ()=>{
    console.log('listening on port 3002');
  }) 