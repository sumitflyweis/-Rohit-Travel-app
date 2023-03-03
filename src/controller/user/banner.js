const banner = require ('../../model/banner')

exports.getBannerByIdByUser = async (req, res) => {
    try {
      const bannerDetails = await banner.findById({ _id: req.params.id });
      console.log(bannerDetails);
      res.status(200).json({
        details: bannerDetails,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  
  exports.getbannerByUser = async (req, res) => {
    try {
      const allbanner = await banner.find();
      console.log(allbanner);
      res.status(200).json({
        message: "All banner ",
        Data: allbanner,
      });
    } catch (err) {
      console.log(err);
      res.status(200).json({
        message: err.message,
      });
    }
  };