const path = require("path");
require("dotenv").config();
const enquiry = require("../../model/enquiryform");

exports.createEnquiry = async (req, res) => {
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
      .select({  _id: 0 });
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
