const mongoose = require('mongoose'); 
//const objectId=mongoose.Schema.Types.ObjectId

const bookingSchema   = mongoose.Schema({
    start_date: {type:String},
    end_date: {type: String},
    hotel:{type:Object},

   city:{type:String},
   Status:{type:String,default:"pending",enum:['pending','success','cancelled']},
    
})
const bookingModel = mongoose.model('bookingProfile', bookingSchema); 
module.exports = bookingModel;