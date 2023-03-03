const path = require("path");
require("dotenv").config();
const subpackages = require("../../model/listofAllSubpackages");
//const userSchema = require("../../../src/model/CustomerAccount");
//const vendorSchema = require("../../../src/model/vendorAccount");
 


exports.getallTypeOfsubpackagegesByUser = async (req, res) => {
    try {
      const allpackages = await subpackages.find()
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

  

exports.getallTypeOfsubpackagegesById = async (req, res) => {
    try {
      const allpackages = await subpackages.find({_id:req.params.id})
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