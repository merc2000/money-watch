const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors'); 
const morgan = require('morgan');
const cors=require('cors');
const connectDB = require('./config/db');

dotenv.config({path:'./config/config.env'});

connectDB();

const transactions = require('./routes/transactions');

const app = express();

app.use(cors());
app.use(express.json());

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

app.use('/api/v1/transactions',transactions);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Listening on port ${PORT} in mode ${process.env.NODE_ENV}`.yellow.bold));