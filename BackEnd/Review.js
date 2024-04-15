const mongoose = require('mongoose');

const ReviewSchema=new mongoose.Schema({
    content : {
        type : String,
        required:true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },

    campground : {
        type: mongoose.Schema.ObjectId,
        ref: 'Campground',
        required:true

    },
    createdAt: {
        type: Date,
        default: Date.now
    },
   
});

module.exports=mongoose.model('Review',ReviewSchema);