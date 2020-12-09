const express =require('express');
const mongoose = require('mongoose');
const morgan =require('morgan');
const path =require('path');

const app =express();
const PORT = process.env.PORT || 8081;

const routes = require('.//routes/api');


// MONGODB_URI|| 
cosnt MONGO_DB ;
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
    app.use(express.static('foodapp/build'))
}

app.listen(PORT,console.log(`server is starting at ${PORT}`));
