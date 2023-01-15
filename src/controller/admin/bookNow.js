const path = require('path'); 
require('dotenv').config()
const bookNow = require('../../model/bookNow')
const hotelmodel=require('../../model/searchByhotel')
const moment = require('moment')

exports.bookingProfile = async(req,res ) => {
    try{
 
      let {start_date,end_date} = req.body
    
 const hotelfind = await hotelmodel.find({hotel:req.params.hotel})
console.log(hotelfind)
if(!hotelfind || hotelfind.length==0){
return res.status(400).send({msg:"no data found"})
}else{
       var b = moment(start_date, 'DD/MM/YYYY HH:mm').toString();
       var c = moment(end_date, 'DD/MM/YYYY HH:mm').toString();
      console.log(b+" "+c)
       const bookNowData = await bookNow.create({hotel:hotelfind,start_date:b,end_date:c})
    console.log(bookNowData); 
    return  res.status(200).json({
        id : bookNowData._id,
        message : "booking Created ",data:bookNowData
     })
    }

}catch(err){
    console.log(err);
    res.status(400).send({message: err.message})
}
} 


// exports.gethotel = async(req,res) => {
//     try {
//       const city=req.body.city
//      const  Allhotel = await Location.find({city:req.body.city});
   
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

