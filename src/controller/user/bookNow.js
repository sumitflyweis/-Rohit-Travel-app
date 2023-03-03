const path = require("path");
require("dotenv").config();
const bookNow = require("../../model/bookNow");
const packages = require("../../model/packages");
const userSchema = require("../../../src/model/CustomerAccount");
const vendorSchema = require("../../../src/model/vendorAccount");
const moment = require("moment");

// packageId:{type:objectId,ref:'packageProfile'},
// Status: {
//   type: String,
//   default: "pending",
//   enum: ["pending", "success", "cancelled"],
// },
// userName: { type: String },
// userId: { type: objectId, ref: "customerProfile" },
// userObject: { type: Object },

exports.bookingProfileByUser = async (req, res) => {
  try {
    const userData = await userSchema.findById(req.params.userId);
 
    if (!userData || userData.length == 0)
      return res.status(400).send({ msg: "userData not found" });

    const packagesfind = await packages.findById({
      _id: req.params.packageId,
    });
    console.log(packagesfind.vendorId);

    if (!packagesfind || packagesfind.length == 0)
      return res.status(400).send({ msg: "packages not found" });

    const bookNowData = await bookNow.create({
      packageId: packagesfind._id,
      packageObject: packagesfind,
      userName: userData.name,
      userId: userData._id,
      vendorId:packagesfind.vendorId
    });
    return res.status(200).send(bookNowData);
    // } else {
    //   return res.status(400).send({ msg: " data already present" });
    // }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
