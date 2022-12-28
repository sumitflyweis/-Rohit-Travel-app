const mongoose = require('mongoose'); 
const objectId=mongoose.Schema.Types.ObjectId

const tourSchema   = mongoose.Schema({
    country:{type:String},
    city: { type: String },
    PopularPlace: [{  type: String  }]
 
})

const populartourModel = mongoose.model('populartour', tourSchema); 

module.exports = populartourModel;