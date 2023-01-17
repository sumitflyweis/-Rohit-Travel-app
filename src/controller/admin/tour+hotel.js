// const path = require("path");
// require("dotenv").config();
//const tour2 = require("../../model/popularTour");
//const hotel = require("../../model/searchByhotel");
// const tourHotel1 = require("../../model/tour+hotel");
// const tourHotel = require("../../model/story");

// exports.tourProfile = async (req, res) => {
//   try {
//     const city = req.body.city;
//     const tour = await tour2
//       .findOne({ tour: tour1, city: city })
//       .select({ tour: 1, city: 1, _id: 0 });
//     console.log(tour);
//     if (tour) {
//       return res.status(200).json("already exists");
//     } else {
//       const tourData = await tour2.create({ tour: tour1, city: city });

//       console.log(tourData);
//       res.status(200).json({
//         id: tourData._id,
//         message: "tour selected ",
//         data: tourData,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(400).send({ message: err.message });
//   }
// };

// exports.tourProfile = async (req, res) => {
//   try {
//     const title = req.body.title;
//     console.log(title)
//     const tourData = await tourHotel.create({title});
//     console.log(tourData);
//     return res.status(200).json({
//       id: tourData._id,
//       message: "tour selected ",
//       data: tourData,
//     });
//   } catch (err) {
//     console.log(err);
//     return res.status(400).send({ message: err.message });
//   }
// };


// exports.tourProfile1 = async (req, res) => {
//     try {
//      const data={ //  _id: req.body._id,
//         name: req.body.name,
//         age: req.body.age, 
//        stories: req.body.stories,
//      }
//     //  findOne({ title: 'Casino Royale' }).
//     //  populate('author').
//       const tourData = await tourHotel1.create(data)
//       console.log(tourData);
//       return res.status(200).json({
//         id: tourData._id,
//         message: "tour selected ",
//         data: tourData,
//       });
//     } catch (err) { 
//       console.log(err);
//       return res.status(400).send({ message: err.message });
//     }
//   };




// exports.gettour2 = async(req,res) => {
//     try {
//      const stories=req.body.stories
//     const  Allhotel = await tourHotel1.findOne({name:req.body.name}).populate("stories")
//     console.log(Allhotel)
//     if(!Allhotel || Allhotel.length==0){return res.status(401).send({message: "no hotels found or no data in db "})
//     }else{
//         return res.status(200).json({
//             data: [Allhotel]
//         })
//     }

//     }catch(err){
//         console.log(err)
//         res.status(400).json({
//             message : err.message
//         })
//     }
// }




// exports.gettour = async(req,res) => {
//     try {
//     const  Allhotel = await hotel.find({city:req.body.city}).select({city:1,hotel:1,_id:0})
//     if(!Allhotel || Allhotel.length==0){return res.status(401).send({message: "no hotels found or no data in db "})
//     }else{
//     const  Alltour = await tour2.find({city:req.body.city}).select({touristDestination:1,city:1,_id:0})

//     if(!Alltour || Alltour.length==0){return res.status(401).send({message: "no tours found or no data in db "})
//     }else{
//         return res.status(200).json({
//             data: [Allhotel,Alltour]
//         })
//     }}

//     }catch(err){
//         console.log(err)
//         res.status(400).json({
//             message : err.message
//         })
//     }
// }

// exports.Updatetour = async(req,res) => {
//     try{

//     const UpdatedData = await hotel.findOneAndUpdate({_id: req.params.id}, {
//                   $addToSet: { hotel: req.body.hotel } })
//      .exec();
//     console.log(UpdatedData);
//     res.status(200).send({
//         message: "hotel Profile Updated ",data:UpdatedData

//     })
// }catch(err){
//     console.log(err);
//     res.status(400).send({message: err.message})
// }
// }

// exports.deletetour = async(req,res) => {
//     try {
//     const id = req.params.id;
//     await hotel.deleteOne({_id: id});
//     res.status(200).send({message: "hotel deleted "})
//     }catch(err){
//       console.log(err);
//       res.status(400).send({message: err.message})
//     }
// }

// exports.gettour = async(req,res) => {
//     try {

//     const  Allhotel = await hotel.find({city:req.body.city}).select({city:1,hotel:1,_id:0})
//     if(!Allhotel || Allhotel.length==0){return res.status(401).send({message: "no hotels found or no data in db "})
//     }else{
//     const  Alltour = await tour2.find({city:req.body.city}).select({touristDestination:1,city:1,_id:0})
//     // console.log(Allhotel);
//     // console.log(Alltour)
//     if(!Alltour || Alltour.length==0){return res.status(401).send({message: "no tours found or no data in db "})
//     }else{
//         return res.status(200).json({
//             data: [Allhotel,Alltour]
//         })
//     }}

//     }catch(err){
//         console.log(err)
//         res.status(400).json({
//             message : err.message
//         })
//     }
// }
