const path = require("path");
require("dotenv").config();
const bookNow = require("../../model/bookNow");
const tour = require("../../model/popularTour");
const moment = require("moment");

exports.getbookingVENDOR = async(req,res) => {
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



exports.getbookingByIdVENDOR = async(req,res) => {
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


exports.UpdatebookingVENDOR = async(req,res) => {
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

exports.deletebookingVENDOR = async(req,res) => {
    try {
    const id = req.params.id;
    await bookNow.deleteOne({_id: id});
  return  res.status(200).send({message: "booking deleted "})
    }catch(err){
      console.log(err);
    return   res.status(400).send({message: err.message})
    }
}
