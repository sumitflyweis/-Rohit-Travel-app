const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },

});
const adminModel = mongoose.model("adminProfile", adminSchema);
module.exports = adminModel;
