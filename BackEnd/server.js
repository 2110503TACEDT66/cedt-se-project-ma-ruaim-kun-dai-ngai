const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db')
const cors = require('cors')
dotenv.config({path:'./config/config.env'});


connectDB();

const app = express();
app.use(cors())
//body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());


const campgrounds = require('./routes/campgrounds');
const users = require('./routes/auth')
const bookings=require('./routes/bookings');
const reviews = require('./routes/reviews')
const replys = require('./routes/replys')
// const rates = require('./routes/rates')

app.use('/api/v1/campgrounds',campgrounds);
app.use('/api/v1/auth',users);
app.use('/api/v1/bookings',bookings);
app.use('/api/v1/reviews',reviews);
app.use('/api/v1/replys',replys);
// app.use('/api/v1/rates', rates)

const PORT = process.env.PORT || 5000;
const server =  app.listen( PORT, console.log('Server running in ' ,process.env.NODE_ENV, ' mode on port ', PORT));

process.on('unhandledRejection' , (err,promise)=>{
    console.log(`Error: ${err.message}`);
    //close server & exit process
    server.close(()=>process.exit(1));
});