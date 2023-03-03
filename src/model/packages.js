const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const packageSchema = mongoose.Schema({
  start_date: { type:String },
  end_date: { type: String },
  //totalDays: { type: Number ,default: 0 },
  price: { type: Number },
  discount: { type: Number },
  DiscountedPrice: { type: Number },
  Type: { type: String },
  location: { type:String },
  Activity: [{ type: String }],
  touristDestination: { type: String },
  vendorId: { type: objectId, ref: "vendorProfile" },

  // category: [{ type: String }],
  //   Status: {
  //     type: String,
  //     default: "pending",
  //     enum: ["pending", "success", "cancelled"],
  //   },
  //   userName: { type: String },
  //   userId: { type: objectId, ref: "customerProfile" },
  //   userObject: { type: Object },
});
const packageModel = mongoose.model("packageProfile", packageSchema);
module.exports = packageModel;
