const mongoose = require('mongoose');

// define the mongodb connection URL
const mongoURL='mongodb://localhost:27017/hotels';

// set up mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlparser: true,
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