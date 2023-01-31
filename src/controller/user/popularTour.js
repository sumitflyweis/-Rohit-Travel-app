const path = require("path");
require("dotenv").config();
const tour = require("../../model/popularTour");



exports.getpopulartourVendor = async (req, res) => {
    try {
      const getpopulardestination = await tour
        .find({ touristDestination: req.params.touristDestination })
        .select({ country: 1, city: 1, touristDestination: 1, _id: 0 });
      console.log(getpopulardestination);
      if (!getpopulardestination || getpopulardestination.length == 0) {
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
    return  res.status(400).json({
        message: err.message,
      });
    }
  };