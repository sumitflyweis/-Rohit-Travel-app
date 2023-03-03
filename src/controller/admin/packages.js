const packages = require("../../model/packages");

exports.getallpackagesByAdmin = async (req, res) => {
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
  

  
exports.getpackagesByIdByAdmin = async (req, res) => {
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

    
  exports.DeleteByAdmin = async (req, res) => {
    try {
      const id = req.params.id;
      await packages.deleteOne({ _id: id });
    return  res.status(200).send({ message: "packages  deleted " });
    } catch (err) {
      console.log(err);
    return  res.status(400).send({ message: err.message });
    }
  };