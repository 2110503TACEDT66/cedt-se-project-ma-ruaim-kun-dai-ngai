// const express = require('express');
// // const {getBookings,getBooking,addBooking,updateBooking, deleteBooking} = require('../controllers/bookings');
// const {getRates,getRate,addRate,deleteRate} = require('../controllers/rates');

// const ratesRouter = require("./rates")

// const router = express.Router({mergeParams:true});
// const {protect,authorize} = require('../middleware/auth')

// //router.use('/:rateId/replys/',replysRouter)

// // router.route('/').get(protect,getBookings).post(protect, authorize('admin','user'),addBooking);
// // router.route('/:id').get(protect,getBooking).put(protect, authorize('admin','user'),updateBooking).delete(protect, authorize('admin','user'),deleteBooking);


// router.route('/').get(getRates).post(addRate);
// router.route('/:id').get(getRate).delete(deleteRate);
// module.exports=router;