const path = require("path");
require("dotenv").config();
const tour = require("../../model/popularTour");

// exports.populartourProfile1 = async (req, res) => {
//   try {
//     const country = req.body.country;
//     const city = req.body.city;
//     const touristDestination = req.body.touristDestination;

//     const tourdestination = await tour
//       .findOne({
//         touristDestination: touristDestination,
//       })
//       .select({ country: 1, city: 1, touristDestination: 1, _id: 0 });
//     console.log(tourdestination);

//     if (tourdestination) {
//       return res.status(200).json("already exists");
//     } else {
//       const tourData = await tour.create({
//         country: country,
//         city: city,
//         touristDestination: touristDestination,
//       });

//       console.log(tourData);
//     return  res.status(200).json({
//         id: tourData._id,
//         message: "tour selected ",
//         data: tourData,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   return  res.status(400).send({ message: err.message });
//   }
// };

exports.getpopulartour1 = async (req, res) => {
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



exports.getAllpopular = async (req, res) => {
  try {
    const getAllpopular = await tour .find()
  
    console.log(getAllpopular);
    if (!getAllpopular || getAllpopular.length == 0) {
      return res
        .status(401)
        .send({ message: "no data is present in the database" });
    } else {
      return res.status(200).json({
        getAllpopular,
      });
    }
  } catch (err) {
    console.log(err);
  return  res.status(400).json({
      message: err.message,
    });
  }
};



exports.getpopulartour1ById = async (req, res) => {
    try {
      const getpopulardestination = await tour
        .findById({ _id:req.params.id })
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

 // { $addToSet: { <field1>: <value1>, ... } }

exports.Updatepopulartour1 = async (req, res) => {
  try {
    const UpdatedData = await tour
      .findOneAndUpdate(
        { _id: req.params.id },
        {
            $addToSet:{ touristDestination: req.body.touristDestination}
        },{new:true}
      )

      .exec();
    console.log(UpdatedData);
  return  res.status(200).send({
      message: "Updatepopulartour Profile Updated ",
      data: UpdatedData,
    });
  } catch (err) {
    console.log(err);
  return  res.status(400).send({ message: err.message });
  }
};

exports.deletepopulartour1 = async (req, res) => {
  try {
    const id = req.params.id;
    await tour.deleteOne({ _id: id });
  return  res.status(200).send({ message: "data deleted " });
  } catch (err) {
    console.log(err);
  return  res.status(400).send({ message: err.message });
  }
};
