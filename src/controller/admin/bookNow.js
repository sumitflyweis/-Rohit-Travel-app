const path = require("path");
require("dotenv").config();
const bookNow = require("../../model/bookNow");
const moment = require("moment");


exports.getbookByAdmin = async (req, res) => {
  try {
    const Allbooking = await bookNow.find();

    if (!Allbooking || Allbooking.length == 0) {
      return res.status(400).send({ msg: "no booking found" });
    } else {
      const NumberOfDays = await bookNow.aggregate([
        {
          $set: {
            totalDays: {
              $dateDiff: {
                startDate: { $toDate: "$start_date" },
                endDate: { $toDate: "$end_date" },
                unit: "day",
              },
            },
          },
        },
      ]);
    
      console.log(NumberOfDays);
   
       return res.status(200).json({
        booking: Allbooking,
        NumberOfDays: NumberOfDays,
       });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.UpdatebookingByAdmin = async (req, res) => {
  try {
    const Updatebooking = await bookNow
      .findOneAndUpdate(
        { _id: req.params.id },
        { Status: req.body.Status },
        { new: true }
      )
      .exec();
    console.log(Updatebooking);
    res.status(200).send({
      message: " Profile Updated ",
      data: Updatebooking,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.deletebookingByAdmin = async(req,res) => {
    try {
    const id = req.params.id;
    await bookNow.deleteOne({_id: id});
   return  res.status(200).send({message: "booking deleted "})
    }catch(err){
      console.log(err);
      res.status(400).send({message: err.message})
    }
}
