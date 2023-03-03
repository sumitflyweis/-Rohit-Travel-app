const mongoose = require('mongoose'); 
const objectId=mongoose.Schema.Types.ObjectId

const tourSchema   = mongoose.Schema({
    country:{type:String},
    city: { type: String },
    touristDestination:[{type:String}],
    rating:{type:String},

})

const populartourModel = mongoose.model('tour', tourSchema); 

module.exports = populartourModel;