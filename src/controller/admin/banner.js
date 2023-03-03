const banner = require ('../../model/banner')
const imagePattern = ("[^\\s]+(.*?)\\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$");

exports.addBanner = async (req, res) => {
    try {
     
      const bannerData = await banner.create({image:req.body.image,desc:req.body.desc});
    //   if(!imagePattern.test(bannerData.image)) {res .status(400).send({msg:"invalid extennsion"})
    // }
    if(!(bannerData.image).match(imagePattern)) {return res .status(400).send({msg:"invalid extennsion"})
     }
    return  res.status(200).json({
        message: "Banner Added ",
        details: bannerData,  
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        message: err.message,
      });
    }
  };
  
  exports.getBannerById = async (req, res) => {
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
  
  exports.getbanner = async (req, res) => {
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
  
  exports.Deletebanner = async (req, res) => {
    try {
      const id = req.params.id;
      await banner.deleteOne({ _id: id });
      res.status(200).send({ message: "banner  deleted " });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  };
  
  exports.UpdateBanner = async (req, res) => {
    try {
      const UpdatedData = await banner
        .findOneAndUpdate(
          { _id: req.params.id },
          {
            image: req.body.image,desc: req.body.desc
          }
        )
        .exec();
      console.log(UpdatedData);
      res.status(200).send({ message: "banner Updated  " });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  };
  