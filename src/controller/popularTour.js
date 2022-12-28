const path = require('path'); 
require('dotenv').config()
// const tour2 = require('../model/tourSearch')
// const Location = require('../model/searchByLocation')
const populartour = require('../model/popularTour')

exports.populartourProfile = async(req,res ) => {
    try{  
    const country=req.body.country
    const city=req.body.city
    const PopularPlace=req.body.PopularPlace

const populardestination = await populartour.findOne({country:country,city:city,PopularPlace:PopularPlace}).select({country:1,city:1,PopularPlace:1,_id:0})
console.log(populardestination)
if(populardestination){
return res.status(200).json("already exists")
}else{
 const tourData = await populartour.create({country:country,city:city,PopularPlace:PopularPlace})
 
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


exports.getpopulartour = async(req,res) => {
    try {
    const  getpopulardestination = await populartour.find({PopularPlace:req.body.PopularPlace}).select({country:1,city:1,PopularPlace:1,_id:0})
    console.log(getpopulardestination);
    if(getpopulardestination.length==0){ return res.status(401).send({message: "no data is present in the database"})
    }else{
    return res.status(200).json({
        getpopulardestination 
    })
}
    }catch(err){
        console.log(err)
        res.status(400).json({
            message : err.message
        })
    }
}

exports.Updatepopulartour = async(req,res) => {
    try{
   
    const UpdatedData = await populartour.findOneAndUpdate({_id: req.params.id}, {
        country : req.body.country, 
        city: req.body.city,
        PopularPlace:req.body.PopularPlace,

    }).exec();
    console.log(UpdatedData);
    res.status(200).send({
        message: "Updatepopulartour Profile Updated ",data:UpdatedData

    })
}catch(err){
    console.log(err);
    res.status(400).send({message: err.message})
}
}

exports.deletepopulartour = async(req,res) => {
    try {
    const id = req.params.id; 
    await populartour.deleteOne({_id: id});
    res.status(200).send({message: "data deleted "})
    }catch(err){
      console.log(err); 
      res.status(400).send({message: err.message})
    }
}
