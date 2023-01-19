const path = require("path");
require("dotenv").config();
const bookNow = require("../../model/bookNow");
const tour = require("../../model/popularTour");
const moment = require("moment");

exports.bookingProfile = async (req, res) => {
  try {
    let {
      start_date,
      end_date,
      DiscountedPrice,
      price,
      discount,
      Activity,
      Booked,
      touristDestination,
      Status,
    } = req.body;


    const bookingfind = await bookNow.find({
      start_date:start_date,end_date:end_date,touristDestination:touristDestination
    });

    if (!bookingfind || bookingfind.length == 0) {
      var b = moment(start_date, "DD/MM/YYYY HH:mm").toString();
      var c = moment(end_date, "DD/MM/YYYY HH:mm").toString();
      console.log(b + " " + c);
      DiscountedPrice = price - (discount / 100) * price;
      const bookNowData = await bookNow.create({
        start_date: b,
        end_date: c,
        price: price,
        discount: discount,
        DiscountedPrice,
        Activity: Activity,
        touristDestination: touristDestination,
        Booked:Booked,
        Status: Status,
      });
      console.log(bookNowData);
      return res.status(200).json({
        id: bookNowData._id,
        message: "booking Created ",
        data: bookNowData,
      });
    } else {
      return res.status(400).send({ msg: " booking already present" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.getbooking = async(req,res) => {
    try {
  const GetBooking=await bookNow.find()

const data=await bookNow.aggregate([

    {$set: {
      totalDays: {
        $dateDiff: {
          startDate: {$toDate: "$start_date"},
          endDate: {$toDate: "$end_date"},
          unit: "day"
        }
      }
    }
  }])
      console.log(data)

    if(!GetBooking  || GetBooking.length==0){return res.status(400).send({msg:"no Booking "})
    }else{
    console.log(GetBooking);
  return   res.status(200).json({
        booking : GetBooking,
        data:data
    })
}
    }catch(err){
        console.log(err)
        res.status(400).json({
            message : err.message
        })
    }
}



exports.getbookingById = async(req,res) => {
  try {
const GetBooking=await bookNow.find({_id:req.params.id})

const data=await bookNow.aggregate([

  {$set: {
    totalDays: {
      $dateDiff: {
        startDate: {$toDate: "$start_date"},
        endDate: {$toDate: "$end_date"},
        unit: "day"
      }
    }
  }
}])
    console.log(data)

  if(!GetBooking  || GetBooking.length==0){return res.status(400).send({msg:"no Booking "})
  }else{
  console.log(GetBooking);
return   res.status(200).json({
      booking : GetBooking,
      data:data
  })
}
  }catch(err){
      console.log(err)
      res.status(400).json({
          message : err.message
      })
  }
}


exports.Updatebooking = async(req,res) => {
    try{
      
      const data=await bookNow.findById({_id: req.params.id})
      {
        //console.log(data)
        if(data.Status="pending" && data.Booked==true){
          data.Status="success"
          await data.save()
        }else{
          data.Status="cancelled"
          await data.save()
        }
          console.log(data)
        
      }
    const UpdatedData = await bookNow.findOneAndUpdate({_id: req.params.id}, {
      start_date:req.body.start_date,
      end_date:req.body.end_date,
      DiscountedPrice:req.body.DiscountedPrice,
      price:req.body.price,
      discount:req.body.discount,
      Activity:req.body.Activity,
      touristDestination:req.body.touristDestination

      },{new:true}
    ).exec();
    console.log(UpdatedData);
   return  res.status(200).send({
        message: " Profile Updated ",data:UpdatedData

    })
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message})
}
}

exports.deletebooking = async(req,res) => {
    try {
    const id = req.params.id;
    await bookNow.deleteOne({_id: id});
  return  res.status(200).send({message: "booking deleted "})
    }catch(err){
      console.log(err);
    return   res.status(400).send({message: err.message})
    }
}
