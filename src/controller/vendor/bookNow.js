const path = require("path");
require("dotenv").config();
const bookNow = require("../../model/bookNow");
const moment = require("moment");

exports.getbookByVendor = async (req, res) => {
  try {
    const Allbooking = await bookNow.find({ vendorId: req.params.vendorId });
    console.log(Allbooking);

    if (!Allbooking || Allbooking.length == 0)
      return res.status(400).send({ msg: "no booking found" });
    // } else {
    // const NumberOfDays = await bookNow.aggregate([

    //   {$match:{ vendorId:'$req.params.vendorId'}},

    //   {
    //     $set: {
    //       totalDays: {
    //         $dateDiff: {
    //           startDate: { $toDate: "$start_date" },
    //           endDate: { $toDate: "$end_date" },
    //           unit: "day",
    //         },
    //       },
    //     },
    //   },
    // ]);

    //   console.log(NumberOfDays);

    return res.status(201).send(Allbooking);

    // }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
    });
  }
};

exports.UpdatebookingByVendor = async (req, res) => {
  try {
    const Updatebooking = await bookNow
      .findOneAndUpdate(
        { _id: req.params.id },
        { Status: req.body.Status },
        { new: true }
      )
      .exec();
    console.log(Updatebooking);
    res.status(200).send({
      message: " Profile Updated ",
      data: Updatebooking,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.deletebookingByVendor = async (req, res) => {
  try {
    const id = req.params.id;
    await bookNow.deleteOne({ _id: id });
    return res.status(200).send({ message: "booking deleted " });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.getAllbookByVendor = async (req, res) => {
  try {
    const Allbooking = await bookNow.find();
    console.log(Allbooking);

    if (!Allbooking || Allbooking.length == 0)
      return res.status(400).send({ msg: "no booking found" });

    return res.status(201).send(Allbooking);
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
    });
  }
};
