const path = require("path");
require("dotenv").config();
const bookNow = require("../../model/bookNow");
const moment = require("moment");


exports.getbookByAdmin = async (req, res) => {
  try {
    const Allbooking = await bookNow.find()
    if(!Allbooking || Allbooking.length==0)
    return res.status(404).send({msg:"booking not found"})

    return res.status(200).send(Allbooking)
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};



exports.getbookByAdminById = async (req, res) => {
  try {
    const Allbooking = await bookNow.findOne({userId:req.params.userId})
    if(!Allbooking || Allbooking.length==0)
    return res.status(404).send({msg:"booking not found"})

    return res.status(200).send(Allbooking)
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

// exports.UpdatebookingByAdmin = async (req, res) => {
//   try {
//     const Updatebooking = await bookNow
//       .findOneAndUpdate(
//         { _id: req.params.id },
//         { Status: req.body.Status },
//         { new: true }
//       )
//       .exec();
//     console.log(Updatebooking);
//     res.status(200).send({
//       message: " Profile Updated ",
//       data: Updatebooking,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(400).send({ message: err.message });
//   }
// };

// exports.deletebookingByAdmin = async(req,res) => {
//     try {
//     const id = req.params.id;
//     await bookNow.deleteOne({_id: id});
//    return  res.status(200).send({message: "booking deleted "})
//     }catch(err){
//       console.log(err);
//       res.status(400).send({message: err.message})
//     }
// }
