const mongoose = require('mongoose');

const ReplySchema=new mongoose.Schema({
    rateContent: {
        type: Int16Array,
        required: true
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

module.exports=mongoose.model('Rate',ReplySchema);