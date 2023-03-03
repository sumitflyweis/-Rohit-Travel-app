const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const subpackageSchema = mongoose.Schema({
  Type: { type: String },
  Activity: [{ type: String }],
  latitude: { type: Number },
  longitude: { type: Number },
  AdultPrice: { type: Number },
  KidsPrice: { type: Number },
  image: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/008/154/360/small/student-logo-vector.jpg",
  },
});
const subpackageModel = mongoose.model("subpackageProfile", subpackageSchema);
module.exports = subpackageModel;
