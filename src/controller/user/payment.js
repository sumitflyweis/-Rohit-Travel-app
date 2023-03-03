const path = require("path");
require("dotenv").config();
const user = require("../../model/CustomerAccount");
const bookNow = require("../../model/bookNow");
const package = require("../../model/packages")
const payment = require("../../model/payment");
const razerpay = require("razorpay");
const crypto = require("crypto");
const uuid = require("uuid");
const id = uuid.v4();
//const payment = require('../models/payment_module');
const Razorpay = new razerpay({
  key_id: "rzp_live_xhEiJ4uMcMKT1r",
  key_secret: "JSwRiz3kcqggnJSTohP1pJPy",
});

exports.CreatePaymentOrder = async (req, res) => {
  try {
    const bookingData = await bookNow.findById({ _id: req.params.id });
    if (!req.params.id) {
      return res.status(500).json({
        message: "bookingId is required",
      });
    }
    console.log(bookingData.vendorId);
    console.log(bookingData.userId)
    console.log(bookingData.packageId)

    const userData = await user.findById({_id:bookingData.userId})
    if(!userData || userData.length ==0) return res .status(404).json({msg:"userData not found "})
    console.log(userData)

    const packageData = await package.findById({_id:bookingData.packageId})

    if(!packageData || packageData.length ==0) return res .status(404).json({msg:"package data not found "})
     console.log(packageData)
    // const data = {
    //     amount: bookingData.DiscountedPrice,
    //     currency: 'INR',
    //     receipt: id,
    //     partial_payment: false,
    // }
    // console.log(data)
    // const result = await Razorpay.orders.create(data);
    // console.log(result)

    const DBData = {
      bookingId: req.params.id,
      user: bookingData.userId,
      userObject:userData,
      packageId:bookingData.packageId,
      package:packageData,
      vendor:bookingData.vendorId,
      invoice: "123" + req.body.name,
     // payment_Id:/* result.id*/id,
      amount: bookingData.DiscountedPrice,
     // amount_paid:/* result.amount_paid*/,
     // receipt:/* result.receipt*/id,
      currency: "INR",
     // receipt: id,
      partial_payment: false,
    };
    console.log(DBData);
    bookingData.Status = "success";
    await bookingData.save();
    const AmountData = await payment.create(DBData);
   return  res.status(200).json({
      details: AmountData,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};



exports.GetPaymentsByUserId = async (req, res) => {
    try {
      const Data = await payment.find({user: req.params.user });
     return  res.status(200).json({ details: Data });
    } catch (err) {
   return  res.status(400).json({ message: err.message });
    }
  };

  
exports.GetAllPayments = async (req, res) => {
  try {
    const Data = await payment.find();
   return  res.status(200).json({ details: Data });
  } catch (err) {
 return  res.status(400).json({ message: err.message });
  }
};