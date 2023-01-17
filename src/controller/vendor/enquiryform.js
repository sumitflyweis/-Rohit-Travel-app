const path = require("path");
require("dotenv").config();
const enquiry = require("../../model/enquiryform");


exports.getenquiry = async (req, res) => {
  try {
    const enquiry1 = await enquiry.find();
    console.log(enquiry1);
     if (!enquiry1 || enquiry1.length === 0)  {
      return res.status(401).send({ message: "no enquiry available " });
    } else {
      return res.status(200).json({
    data: enquiry1,
      });
    }
  } catch (err) {
    console.log(err);
  return  res.status(400).json({
      message: err.message,
    });
  }
};


exports.getenquiryById = async (req, res) => {
    try {
      const enquiry1 = await enquiry.findOne({
        _id:req.params.id,
      });
      console.log(enquiry1);
       if (!enquiry1 || enquiry1.length === 0)  {
        return res.status(401).send({ message: "no enquiry available " });
      } else {
        return res.status(200).json({
      data: enquiry1,
        });
      }
    } catch (err) {
      console.log(err);
    return  res.status(400).json({
        message: err.message,
      });
    }
  };
  




exports.Updateenquiry = async (req, res) => {
  try {
    let newdata = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      State: req.body.State,
      Country: req.body.Country, 
      Expected_Date_of_Arrival: req.body.Expected_Date_of_Arrival,
      Expected_Date_of_Departure: req.body.Expected_Date_of_Departure,
      Grown_Ups_Above_13_years: req.body.Grown_Ups_Above_13_years,
      Children_5_13_years: req.body.Children_5_13_years,
      Infants_upto_5_years: req.body.Infants_upto_5_years,
      How_important_is_service_to_you: req.body.How_important_is_service_to_you,
      Message: req.body.Message,
    };

    const UpdatedData = await enquiry 
      .findOneAndUpdate( {_id: req.params.id} ,  newdata,{new:true} )
      .exec();
    console.log(UpdatedData);
  return   res.status(200).send({
      message: "enquiry Profile Updated ",
      data: UpdatedData,
    });
  } catch (err) {
    console.log(err);
    return  res.status(400).send({ message: err.message });
  }
};

exports.deleteenquiry = async(req,res) => {
    try {
    const id = req.params.id;
    await enquiry.deleteOne({_id: id});
  return  res.status(200).send({message: "enquiry deleted "})
    }catch(err){
      console.log(err);
    return  res.status(400).send({message: err.message})
    }
}
