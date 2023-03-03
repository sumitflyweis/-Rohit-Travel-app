const path = require("path");
require("dotenv").config();
const subpackages = require("../../model/listofAllSubpackages");
//const userSchema = require("../../../src/model/CustomerAccount");
//const vendorSchema = require("../../../src/model/vendorAccount");

exports.subpackagesByVendor = async (req, res) => {
  try {
    const packagesData = await subpackages.create({
      Type: req.body.Type,
      Activity: req.body.Activity,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      AdultPrice: req.body.AdultPrice,
      KidsPrice: req.body.KidsPrice,
      image:req.body.image
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

exports.getallTypeOfsubpackageges = async (req, res) => {
  try {
    const allpackages = await subpackages.find();
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
};

exports.UpdatesubPackagesByVendor = async (req, res) => {
  try {
    const UpdatedData = await subpackages
      .findOneAndUpdate(
        { _id: req.params.id },
       { $addToSet: { Activity: req.body.Activity } ,
        $set:{
          Type: req.body.Type,
          latitude: req.body.latitude,
          longitude: req.body.longitude,
          AdultPrice: req.body.AdultPrice,
          KidsPrice: req.body.KidsPrice,
          image:req.body.image
        }},
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
