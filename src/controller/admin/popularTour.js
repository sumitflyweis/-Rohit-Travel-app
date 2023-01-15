const path = require("path");
require("dotenv").config();
// const tour2 = require('../model/tourSearch')
// const Location = require('../model/searchByLocation')
const tour = require("../../model/popularTour");

exports.populartourProfile = async (req, res) => {
  try {
    const country = req.body.country;

    const city = req.body.city;
    const touristDestination = req.body.touristDestination;

    const tourdestination = await tour
      .findOne({
        touristDestination: touristDestination,
      })
      .select({ country: 1, city: 1, touristDestination: 1, _id: 0 });
    console.log(tourdestination);

    if (tourdestination) {
      return res.status(200).json("already exists");
    } else {
      const tourData = await tour.create({
        country: country,
        city: city,
        touristDestination: touristDestination,
      });

      console.log(tourData);
      res.status(200).json({
        id: tourData._id,
        message: "tour selected ",
        data: tourData,
      });
    }
  } catch (err) {  
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.getpopulartour = async (req, res) => {
  try {
    const getpopulardestination = await tour
      .find({ touristDestination: req.body.touristDestination })
      .select({ country: 1, city: 1, touristDestination: 1, _id: 0 });
    console.log(getpopulardestination);
    if (getpopulardestination.length == 0) {
      return res
        .status(401)
        .send({ message: "no data is present in the database" });
    } else {
      return res.status(200).json({
        getpopulardestination,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.Updatepopulartour = async (req, res) => {
  try {
    const UpdatedData = await tour
      .findOneAndUpdate(
        { _id: req.params.id },
        {
        
           $set: { touristDestination: req.body.touristDestination } 
        }
      )

      .exec();
    console.log(UpdatedData);
    res.status(200).send({
      message: "Updatepopulartour Profile Updated ",
      data: UpdatedData,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.deletepopulartour = async (req, res) => {
  try {
    const id = req.params.id;
    await populartour.deleteOne({ _id: id });
    res.status(200).send({ message: "data deleted " });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
