const path = require('path'); 
require('dotenv').config()
const Location = require('../../model/searchByhotel')

exports.hotelProfile = async(req,res ) => {
    try{
    const data = {
        city : req.body.city, 
        hotel: req.body.hotel,
        rating:req.body.rating,
        reviews:req.body.reviews,
        price:req.body.price
     
    }
    const alreadyregistered = await Location.findOne({ city: req.body.city, hotel: req.body.hotel ,rating:req.body.rating, reviews:req.body.reviews, price:req.body.price})
 
if(!alreadyregistered || alreadyregistered.length==0){

    const locationData = await Location.create(data); 
    console.log(locationData); 
    res.status(200).json({
        id : locationData._id,
        message : "hotel  Created ",data:locationData
    })
}else{ return res.status(200).json({
msg:"already exists"})
}
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message})
}


} 


exports.gethotel = async(req,res) => {
    try {
    
     const  Allhotel = await Location.find({_id:req.params.id}).select({hotel:1,_id:1})
   
    if(!Allhotel  || Allhotel.length==0){return res.status(400).send({msg:"no hotel nearby"})
    }else{
    console.log(Allhotel);
    res.status(200).json({
        hotels : Allhotel
    })
}
    }catch(err){
        console.log(err)
        res.status(400).json({
            message : err.message
        })
    }
}





exports.Updatehotel = async(req,res) => {
    try{
   
    const UpdatedData = await Location.findOneAndUpdate({_id: req.params.id}, {
        $addToSet: { hotel: req.body.hotel , rating:req.body.rating,
        reviews:req.body.reviews, price:req.body.price }}
    ).exec();
    console.log(UpdatedData);
    res.status(200).send({
        message: "Admin Profile Updated ",data:UpdatedData

    })
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message})
}
}

exports.deletehotel = async(req,res) => {
    try {
    const id = req.params.id; 
    await Location.deleteOne({_id: id});
    res.status(200).send({message: "hotel deleted "})
    }catch(err){
      console.log(err); 
      res.status(400).send({message: err.message})
    }
}

