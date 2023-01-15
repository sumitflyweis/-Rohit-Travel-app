const mongoose = require("mongoose");
const objectId=mongoose.Schema.Types.ObjectId
const LocationSchema = mongoose.Schema({
  city: {
    type: String,
  },

   hotel: 
    {
      type: String,
    },
   reviews:[{type:objectId,ref:"review"}],
  rating:{type:Number, min:0, max:5, default:0},
  price:{type:Number},
});

const hotelModel = mongoose.model("hotel", LocationSchema);
module.exports = hotelModel;
