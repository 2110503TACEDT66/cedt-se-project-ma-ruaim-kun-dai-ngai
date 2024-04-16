const express = require('express');
// const {getBookings,getBooking,addBooking,updateBooking, deleteBooking} = require('../controllers/bookings');
const {getReplys,getReply,addReply} = require('../controllers/replys');

const router = express.Router({mergeParams:true});
const {protect,authorize} = require('../middleware/auth')

// router.route('/').get(protect,getBookings).post(protect, authorize('admin','user'),addBooking);
// router.route('/:id').get(protect,getBooking).put(protect, authorize('admin','user'),updateBooking).delete(protect, authorize('admin','user'),deleteBooking);
router.route('/').get(getReplys).post(addReply)
router.route('/:id').get(getReply)
module.exports=router;