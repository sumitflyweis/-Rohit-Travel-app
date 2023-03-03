const path = require("path");
require("dotenv").config();
const packages = require("../../model/packages");
//const userSchema = require("../../../src/model/CustomerAccount");
//const vendorSchema = require("../../../src/model/vendorAccount");
const moment = require("moment");

exports.packagesByVendor = async (req, res) => {
  try {
    var DiscountedPrice =
      parseInt(req.body.price) -
      parseInt((req.body.discount / 100) * req.body.price);

    var b = moment(req.body.start_date, "DD/MM/YYYY HH:mm").toString();
    var c = moment(req.body.end_date, "DD/MM/YYYY HH:mm").toString();
    // console.log(b + " " + c);

    const packagesData = await packages.create({
      start_date: b,
      end_date: c,
      price: req.body.price,
      discount: req.body.discount,
      DiscountedPrice,
      Type: req.body.Type,
      Activity: req.body.Activity,
      location: req.body.location,
      touristDestination: req.body.touristDestination,
      vendorId: req.body.vendorId,
    });

    return res.status(200).json({
      id: packagesData._id,
      message: "packagesData Created ",
      data: packagesData,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

  
exports.getallTypeOfpackageges = async (req, res) => {
  try {
    const allpackages = await packages.find({Type:req.body.Type})
    if (!allpackages || allpackages.length === 0) {
      return res.status(400).json({
        message: "No packages",
      });
    }
    return res.status(200).json({
      message: "packages found",
      data: allpackages,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
}


exports.UpdatePackagesByVendor = async (req, res) => {
  try {
    // var b = moment(req.body.start_date, "DD/MM/YYYY HH:mm").toString();
    // var c = moment(req.body.end_date, "DD/MM/YYYY HH:mm").toString();
    // var DiscountedPrice =
    //   parseInt(req.body.price) -
    //   parseInt((req.body.discount / 100) * req.body.price);

    // let newdata = {
    //   start_date:b,
    //   end_date: c,
    //   price: req.body.price,
    //   discount: req.body.discount,
    //   DiscountedPrice,
    //   touristDestination: req.body.touristDestination,
    //   vendorId: req.body.vendorId,
    // };

    const UpdatedData = await packages
      .findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { Activity: req.body.Activity } },
        { new: true }
      )
      .exec();
    console.log(UpdatedData);
    return res.status(200).send({
      message: "packages  Profile Updated ",
      data: UpdatedData,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};


 
exports.getallTypeOfpackagegesByVendor = async (req, res) => {
  try {
    const allpackages = await packages.find()
    if (!allpackages || allpackages.length === 0) {
      return res.status(400).json({
        message: "No packages",
      });
    }
    return res.status(200).json({
      message: "packages found",
      data: allpackages,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "internal server error",
    });
  }
}
