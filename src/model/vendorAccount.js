const mongoose = require("mongoose");
const vendorSchema = mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmPassword: { type: String },
  otp: { type: String },
  Token: { type: String },
});
const vendorModel = mongoose.model("vendorProfile", vendorSchema);
module.exports = vendorModel;
