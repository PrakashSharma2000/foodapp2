const express =require('express');
const mongoose = require('mongoose');
const morgan =require('morgan');
const path =require('path');

const app =express();
const PORT = process.env.PORT || 8081;

const routes = require('.//routes/api');

//MongoDb uri
// const MONGODB_URI = 'mongodb+srv://PrakashSharma:Prakash25s@testdb.w7sqc.mongodb.net/TestDB?retryWrites=true&w=majority';
// MONGODB_URI|| 

mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/test',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


mongoose.connection.on('connected',() =>{
    console.log('Mongoose is conneted');
})

//data parsing
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Http request
app.use(morgan('tiny'));
app.use('/api',routes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('foodapp2/build'))
}

app.listen(PORT,console.log(`server is starting at ${PORT}`));