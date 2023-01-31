const path = require("path");
require("dotenv").config();
const bookNow = require("../../model/bookNow");
const userSchema = require("../../../src/model/CustomerAccount");
const vendorSchema = require("../../../src/model/vendorAccount");
const moment = require("moment");

exports.bookingProfileByUser = async (req, res) => {
  try {
    const userfind = await userSchema.findOne({
      _id: req.body.userId,
      //   touristDestination: touristDestination,
      //   start_date: start_date,
      //   end_date: end_date,
      //   price: price,
    });

    if (!userfind || userfind.length == 0)
      return res.status(400).send({ msg: "user not found" });

    const vendorfind = await vendorSchema.findOne({
      _id: req.body.vendorId,
    });

    DiscountedPrice =
      parseInt(req.body.price) -
      parseInt((req.body.discount / 100) * req.body.price);

    var b = moment(req.body.start_date, "DD/MM/YYYY HH:mm").toString();
    var c = moment(req.body.end_date, "DD/MM/YYYY HH:mm").toString();
    console.log(b + " " + c);
    const bookNowData = await bookNow.create({
      start_date: b,
      end_date: c,
      price: req.body.price,
      discount: req.body.discount,
      DiscountedPrice,
      category: req.body.category,
      touristDestination: req.body.touristDestination,
      Status: req.body.Status,
      userObject: userfind,
      userId:userfind._id,
      vendorObject: vendorfind,
      vendorId: vendorfind._id
    });
    // console.log(bookNowData);
    return res.status(200).json({
      id: bookNowData._id,
      message: "booking Created ",
      data: bookNowData,
    });
    // } else {
    //   return res.status(400).send({ msg: " data already present" });
    // }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
