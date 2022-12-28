const mongoose = require('mongoose'); 
const objectId=mongoose.Schema.Types.ObjectId

const tourSchema   = mongoose.Schema({
    city: {
        type: String, 
    },
    tour: [{
        type: String, 
    }],
   // locationId:{type:objectId,ref:"locationProfile"}
   
   
})

const tourModel = mongoose.model('tourProfile', tourSchema); 

module.exports = tourModel;