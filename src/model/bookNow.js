const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const bookingSchema = mongoose.Schema({
 
  start_date: { type: Date},
  end_date: { type: Date},
  totalDays:{type:Number},
  price: { type: Number },
  discount:{type:Number},
  DiscountedPrice:{type:Number},
  Activity:[{type:String}],
  touristDestination: { type:String},
  Booked:{type:String,default:false},
  Status: {
    type: String,
    default: "pending",
    enum: ["pending", "success", "cancelled"],
  },
});
const bookingModel = mongoose.model("bookingProfile", bookingSchema);
module.exports = bookingModel;
