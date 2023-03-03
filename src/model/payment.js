const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const paymentSchema = mongoose.Schema({
  bookingId: { type: objectId },
  name: { type: String },

  payment_Id: {
    type: String,
  },
  amount: {
    type: Number,
    //  required: true
  },
  invoice: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  receipt: {
    type: String,
    // required: true
  },
  // amount_paid: {
  //     type: Number,
  //     default: 0
  // },
  name: {
    type: String,
  },
  type: {
    type: String,
    enum: ["given", "Given", "taken", "Taken", "GIVEN", "TAKEN"],
  },
  date: {
    type: Date,
  },
  paymentMethod: {
    type: String,
    enum: [
      "upi",
      "DebitCard",
      "Debitcard",
      "debitcard",
      "creditcard",
      "CreditCard",
    ],
  },
  product: {
    type: String,
  },
  orderStatus: {
    type: String,
    default: "In Progress",
    enum: ["Cancelled", "In Progress", "Ordered"],
  },
  user: { type: objectId, ref: "user" },
  // userName:{type:String},
  userObject: { type: Object },
  vendorName: { type: String },
  vendor: { type: objectId, ref: "vendorProfile" },
  packageId: { type: objectId, ref: "packageProfile" },
  package: { type: Object },
});
const paymentModel = mongoose.model("paymentform", paymentSchema);
module.exports = paymentModel;
