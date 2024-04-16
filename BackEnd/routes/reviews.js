const express = require('express');
// const {getBookings,getBooking,addBooking,updateBooking, deleteBooking} = require('../controllers/bookings');
const {getReviews,getReview,addReview,deleteReview} = require('../controllers/reviews');

const replysRouter = require("./replys")

const router = express.Router({mergeParams:true});
const {protect,authorize} = require('../middleware/auth')

router.use('/:reviewId/replys/',replysRouter)

// router.route('/').get(protect,getBookings).post(protect, authorize('admin','user'),addBooking);
// router.route('/:id').get(protect,getBooking).put(protect, authorize('admin','user'),updateBooking).delete(protect, authorize('admin','user'),deleteBooking);


router.route('/').get(getReviews).post(addReview);
router.route('/:id').get(getReview).delete(deleteReview);
module.exports=router;