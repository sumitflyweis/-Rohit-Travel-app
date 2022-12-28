//var bcrypt = require('bcrypt');
const path = require('path'); 
require('dotenv').config()
//const jwt = require('jsonwebtoken');
const Location = require('../model/searchByLocation')

exports.locationProfile = async(req,res ) => {
    try{
    const data = {
        city : req.body.city, 
        hotel: req.body.hotel
        
    }
    const locationData = await Location.create(data); 
    console.log(locationData); 
    res.status(200).json({
        id : locationData._id,
        message : "Admin Account  Created ",data:locationData
    })
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message})
}


} 


exports.gethotel = async(req,res) => {
    try {
      
    const  Allhotel = await Location.find({city:req.body.city});
    if(Allhotel.length==0)return res.status(400).send({msg:"no hotel nearby"})
    console.log(Allhotel);
    res.status(200).json({
        hotels : Allhotel
    })
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

