const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const bookingSchema = mongoose.Schema({
  start_date: { type: Date },
  end_date: { type: Date },
  totalDays: { type: Number },
  price: { type: Number },
  discount: { type: Number },
  DiscountedPrice: { type: Number },
  category: [{ type: String }],
  touristDestination: { type: String },
  Status: {
    type: String,
    default: "pending",
    enum: ["pending", "success", "cancelled"],
  },
  userName: { type: String },
  userId: { type: objectId, ref: "customerProfile" },
  userObject: { type: Object },
  vendorId: { type: objectId, ref: "vendorProfile" },
  vendorObject: { type: Object },
});
const bookingModel = mongoose.model("bookingProfile", bookingSchema);
module.exports = bookingModel;
