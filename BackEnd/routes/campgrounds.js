  const express = require('express');
  const {getCampgrounds,getCampground,createCampground,updateCampground,deleteCampground} = require('../controllers/campgrounds');


  const reviewsRouter = require("./reviews")
  const ratesRouter = require("./rates")
  const bookingRouter = require('./bookings');
  const router = express.Router();
  const {protect,authorize} = require('../middleware/auth');

  router.use('/:campgroundId/bookings/',bookingRouter)
  router.use('/:campgroundId/reviews/',reviewsRouter)
  router.use('/:campgroundId/rates/',ratesRouter)

  router.route('/').get(getCampgrounds).post(protect,authorize('admin'),createCampground);
  router.route('/:id').get(getCampground).put(updateCampground).delete(protect,authorize('admin'),deleteCampground);

  


 module.exports=router;