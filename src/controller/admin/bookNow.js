const path = require("path");
require("dotenv").config();
const bookNow = require("../../model/bookNow");
const moment = require("moment");

exports.bookingProfile = async (req, res) => {
  try {
    let {
      start_date,
      end_date,
      DiscountedPrice,
      price,
      discount,
      category,
      touristDestination,
      Status,
    } = req.body;

    const bookingfind = await bookNow.find({
      touristDestination: touristDestination,
      start_date: start_date,
      end_date: end_date,
      price: price,
    });
    // console.log(bookingfind);
    DiscountedPrice=price-(discount/100)*price
    if (!bookingfind || bookingfind.length == 0) {
      var b = moment(start_date, "DD/MM/YYYY HH:mm").toString();
      var c = moment(end_date, "DD/MM/YYYY HH:mm").toString();
      console.log(b + " " + c);
      const bookNowData = await bookNow.create({
        start_date: b,
        end_date: c,
        price: price,
        discount: discount,
        DiscountedPrice,
        category: category,
        touristDestination: touristDestination,
        Status: Status,
      });
      console.log(bookNowData);
      return res.status(200).json({
        id: bookNowData._id,
        message: "booking Created ",
        data: bookNowData,
      });
    } else {
      return res.status(400).send({ msg: " data already present" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

// exports.gethotel = async(req,res) => {
//     try {
//       const city=req.body.city
//      const  Allhotel = await Location.find({city:req.body.city});

// const data=await bookNow.aggregate([

//     {$set: {
//       totalDays: {
//         $dateDiff: {
//           startDate: {$toDate: "$start_date"},
//           endDate: {$toDate: "$end_date"},
//           unit: "day"
//         }
//       }
//     }
//   },
//   // {$match: {hoursDiff: {$gte: 20}}}
//   ]
//         )

//              console.log(data)

//     if(!Allhotel  || Allhotel.length==0){return res.status(400).send({msg:"no hotel nearby"})
//     }else{
//     console.log(Allhotel);
//     res.status(200).json({
//         hotels : Allhotel
//     })
// }
//     }catch(err){
//         console.log(err)
//         res.status(400).json({
//             message : err.message
//         })
//     }
// }

// exports.Updatehotel = async(req,res) => {
//     try{

//     const UpdatedData = await Location.findOneAndUpdate({_id: req.params.id}, {
//         $addToSet: { hotel: req.body.hotel , rating:req.body.rating,
//         reviews:req.body.reviews, price:req.body.price }}
//     ).exec();
//     console.log(UpdatedData);
//     res.status(200).send({
//         message: "Admin Profile Updated ",data:UpdatedData

//     })
// }catch(err){
//     console.log(err);
//     res.status(400).send({message: err.message})
// }
// }

// exports.deletehotel = async(req,res) => {
//     try {
//     const id = req.params.id;
//     await Location.deleteOne({_id: id});
//     res.status(200).send({message: "hotel deleted "})
//     }catch(err){
//       console.log(err);
//       res.status(400).send({message: err.message})
//     }
// }
