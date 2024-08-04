const mongoose = require('mongoose');

require('dotenv').config();
// define the mongodb connection URL
//const mongoURL='mongodb://localhost:27017/hotels';
// const mongoURL="mongodb+srv://helloworld1:ytrewQ17@cluster0.rva8gab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoURL=process.env.MONGODB_URL;


mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})

// get the default connection
// mongoose maintains a default connection object representing the mingdb connection
const db = mongoose.connection;

// define event listeners for databse connection

db.on('connected', ()=>{
    console.log('connected to mongdb server');

});

db.on('error', (err)=>{
    console.error('mongodb connection error', err);
});

db.on('disconnected',()=>{
    console.log('mongodb disconnected');
});

//  export the database connection
module.exports = db;