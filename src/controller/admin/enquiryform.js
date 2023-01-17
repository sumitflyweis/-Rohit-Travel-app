const path = require("path");
require("dotenv").config();
// const tour2 = require('../model/tourSearch')
// const Location = require('../model/searchByLocation')
const enquiry = require("../../model/enquiryform");

exports.createEnquiryAdmin = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const State = req.body.State;
    const Country = req.body.Country;
    const Expected_Date_of_Arrival = req.body.Expected_Date_of_Arrival;
    const Expected_Date_of_Departure = req.body.Expected_Date_of_Departure;
    const Grown_Ups_Above_13_years = req.body.Grown_Ups_Above_13_years;
    const Children_5_13_years = req.body.Children_5_13_years;
    const Infants_upto_5_years = req.body.Infants_upto_5_years;
    const How_important_is_service_to_you =
      req.body.How_important_is_service_to_you;
    const Message = req.body.Message;

    const enquiryform = await enquiry
      .findOne({ name: name, email: email })
      .select({ _id: 0 });
    console.log(enquiryform);
    if (enquiryform) {
      return res.status(200).json("already exists");
    } else {
      const enquiryform = await enquiry.create({
        name: name,
        email: email,
        phone: phone,
        State: State,
        Country: Country,
        Expected_Date_of_Arrival: Expected_Date_of_Arrival,
        Expected_Date_of_Departure: Expected_Date_of_Departure,
        Grown_Ups_Above_13_years: Grown_Ups_Above_13_years,
        Children_5_13_years: Children_5_13_years,
        Infants_upto_5_years: Infants_upto_5_years,
        How_important_is_service_to_you: How_important_is_service_to_you,
        Message: Message,
      });

      console.log(enquiryform);
      res.status(200).json({
        id: enquiryform._id,
        message: "bookingform selected ",
        data: enquiryform,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};


exports.getEnqiryAdmin = async (req, res) => {
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


exports.getEnqiryAdminById = async (req, res) => {
    try {
      const enquiry1 = await enquiry.findOne({
        id:req.params.id,
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
  




exports.updateEquiryAdmin = async (req, res) => {
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

exports.deleteEnquiryAdmin = async(req,res) => {
    try {
    const id = req.params.id;
    await enquiry.deleteOne({_id: id});
  return  res.status(200).send({message: "enquiry deleted "})
    }catch(err){
      console.log(err);
    return  res.status(400).send({message: err.message})
    }
}
