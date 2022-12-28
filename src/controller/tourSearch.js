const path = require('path'); 
require('dotenv').config()
const tour2 = require('../model/tourSearch')
const Location = require('../model/searchByLocation')

exports.tourProfile = async(req,res ) => {
    try{  
    const tour1=req.body.tour
    const city=req.body.city

const tour = await tour2.findOne({tour:tour1,city:city}).select({tour:1,city:1,_id:0})
console.log(tour)
if(tour){
return res.status(200).json("already exists")
}else{
 const tourData = await tour2.create({tour:tour1,city:city})
 
       console.log(tourData);
    res.status(200).json({
        id : tourData._id,
        message : "tour selected ",data:tourData
    })  
} 
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message})
}
} 


exports.gettour = async(req,res) => {
    try {
      
    const  Allhotel = await Location.find({city:req.body.city}).select({city:1,hotel:1,_id:0})
    const  Allreligiousplaces = await tour2.find({city:req.body.city}).select({tour:1,_id:0})
    console.log(Allhotel);
    console.log(Allreligiousplaces)
    if(Allhotel.length==0){ return res.status(401).send({message: "no hotels found or no data in db "})}
     else if(Allreligiousplaces.length==0){res.status(401).send({msg:" hotel present but no religious places present"})
    }else{

    return res.status(200).json({
        hotels : Allhotel,Allreligiousplaces:Allreligiousplaces
    })
}
    }catch(err){
        console.log(err)
        res.status(400).json({
            message : err.message
        })
    }
}

exports.Updatelocation = async(req,res) => {
    try{
   
    const UpdatedData = await Location.findOneAndUpdate({_id: req.params.id}, {
        city : req.body.city, 
        hotel: req.body.hotel,
    }).exec();
    console.log(UpdatedData);
    res.status(200).send({
        message: "Admin Profile Updated ",data:UpdatedData

    })
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message})
}
}

exports.deletelocation = async(req,res) => {
    try {
    const id = req.params.id; 
    await Location.deleteOne({_id: id});
    res.status(200).send({message: "hotel deleted "})
    }catch(err){
      console.log(err); 
      res.status(400).send({message: err.message})
    }
}
