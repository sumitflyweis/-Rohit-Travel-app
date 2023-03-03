const packages = require("../../model/packages");

exports.getallpackagesByUser = async (req, res) => {
    try {
      const packagesData = await packages.find();
      if (!packagesData || packagesData.length === 0) {
        return res.status(400).json({
          message: "No packages",
        });
      }
      return res.status(200).json({
        message: "packages found",
        data: packagesData,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  }
  



  
exports.getpackagesByIdByUser = async (req, res) => {
    try {
      const packagesData = await packages.find({_id:req.params.id});
      if (!packagesData || packagesData.length === 0) {
        return res.status(400).json({
          message: "No packagesData",
        });
      }
      return res.status(200).json({
        message: "packagesData found",
        data: packagesData,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  }