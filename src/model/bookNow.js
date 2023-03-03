const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const bookingSchema = mongoose.Schema({
  packageId:{type:objectId,ref:'packageProfile'},
  packageObject: { type: Object },
  Status: {
    type: String,
    default: "pending",
    enum: ["pending", "success", "cancelled"],
  },
  userName: { type: String },
  userId: { type: objectId, ref: "customerProfile" },
  userObject: { type: Object },
   vendorId: { type: objectId, ref: "vendorProfile" },
  // vendorObject: { type: Object },
});
const bookingModel = mongoose.model("bookingProfile", bookingSchema);
module.exports = bookingModel;
