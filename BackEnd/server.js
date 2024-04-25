const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db')
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const {xss} = require('express-xss-sanitizer');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

dotenv.config({path:'./config/config.env'});

connectDB();

const app = express();

//body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

app.use(mongoSanitize());

app.use(helmet());

app.use(xss());

const limiter = rateLimit({
    windowMs:10*60*1000,
    max: 500
});
app.use(limiter);

app.use(hpp());

app.use(cors());

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