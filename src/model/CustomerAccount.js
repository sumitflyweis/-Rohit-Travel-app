const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
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

const AdminModel = mongoose.model("customerProfile", AdminSchema);

module.exports = AdminModel;
