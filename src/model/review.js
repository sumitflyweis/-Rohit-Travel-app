const mongoose = require('mongoose'); 
const objectId=mongoose.Schema.Types.ObjectId

const reviewSchema   = mongoose.Schema({
    hotelId:{type:objectId},
    hotel:{type:Object},
    userId: { type: objectId },
    user:{type:Object},
    review:{type:String},
    rating:{type:String},
    reviewsId:{type:String},

})

const reviewModel = mongoose.model('review', reviewSchema); 

module.exports = reviewModel;