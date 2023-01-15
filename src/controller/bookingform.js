// const path = require("path");
// require("dotenv").config();
// // const tour2 = require('../model/tourSearch')
// // const Location = require('../model/searchByLocation')
// const booking = require("../model/bookingform");

// exports.bookingProfile = async (req, res) => {
//   try {
//     const name = req.body.name;
//     const email = req.body.email;
//     const phone = req.body.phone;
//     const State = req.body.State;
//     const Country = req.body.Country;
//     const Expected_Date_of_Arrival = req.body.Expected_Date_of_Arrival;
//     const Expected_Date_of_Departure = req.body.Expected_Date_of_Departure;
//     const Grown_Ups_Above_13_years = req.body.Grown_Ups_Above_13_years;
//     const Children_5_13_years = req.body.Children_5_13_years;
//     const Infants_upto_5_years = req.body.Infants_upto_5_years;
//     const How_important_is_service_to_you =
//       req.body.How_important_is_service_to_you;
//     const Message = req.body.Message;

//     const bookingform = await booking
//       .findOne({ name: name, email: email })
//       .select({ name: 1, email: 1, _id: 0 });
//     console.log(bookingform);
//     if (bookingform) {
//       return res.status(200).json("already exists");
//     } else {
//       const bookingform = await booking.create({
//         name: name,
//         email: email,
//         phone: phone,
//         State: State,
//         Country: Country,
//         Expected_Date_of_Arrival: Expected_Date_of_Arrival,
//         Expected_Date_of_Departure: Expected_Date_of_Departure,
//         Grown_Ups_Above_13_years: Grown_Ups_Above_13_years,
//         Children_5_13_years: Children_5_13_years,
//         Infants_upto_5_years: Infants_upto_5_years,
//         How_important_is_service_to_you: How_important_is_service_to_you,
//         Message: Message,
//       });

//       console.log(bookingform);
//       res.status(200).json({
//         id: bookingform._id,
//         message: "bookingform selected ",
//         data: bookingform,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(400).send({ message: err.message });
//   }
// };

// exports.getbooking = async (req, res) => {
//   try {
//     const Allbooking = await booking.findOne({
//       name: req.body.name,
//       email: req.body.email,
//     });
//     console.log(Allbooking);
//     // console.log(Allreligiousplaces)
//     if (!Allbooking) {
//       return res.status(401).send({ message: "no booking available " });
//     } else {
//       return res.status(200).json({
//         booking: Allbooking,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({
//       message: err.message,
//     });
//   }
// };

// exports.Updatebooking = async (req, res) => {
//   try {
//     let newdata = {
//       name: req.body.name,
//       email: req.body.email,
//       phone: req.body.phone,
//       State: req.body.State,
//       Country: req.body.Country, 
//       Expected_Date_of_Arrival: req.body.Expected_Date_of_Arrival,
//       Expected_Date_of_Departure: req.body.Expected_Date_of_Departure,
//       Grown_Ups_Above_13_years: req.body.Grown_Ups_Above_13_years,
//       Children_5_13_years: req.body.Children_5_13_years,
//       Infants_upto_5_years: req.body.Infants_upto_5_years,
//       How_important_is_service_to_you: req.body.How_important_is_service_to_you,
//       Message: req.body.Message,
//     };

//     const UpdatedData = await booking 
//       .findOneAndUpdate( {_id: req.params.id} ,  newdata,{new:true} )
//       .exec();
//     console.log(UpdatedData);
//     res.status(200).send({
//       message: "booking Profile Updated ",
//       data: UpdatedData,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(400).send({ message: err.message });
//   }
// };

// exports.deletebooking = async(req,res) => {
//     try {
//     const id = req.params.id;
//     await Location.deleteOne({_id: id});
//     res.status(200).send({message: "hotel deleted "})
//     }catch(err){
//       console.log(err);
//       res.status(400).send({message: err.message})
//     }
// }
