const mongoose = require("mongoose"); 

const notificationSchema = mongoose.Schema({
   message:{type:String},
   title:{type:String},
   action:{type:String},

  
},{
   timestamps:true
})

const notification  = mongoose.model('notification', notificationSchema);

module.exports = notification