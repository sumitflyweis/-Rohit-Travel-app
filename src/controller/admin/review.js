const reviewSchema = require("../../model/review");
const hotelSchema = require('../../model/searchByhotel')
const userSchema = require('../../model/CustomerAccount')

module.exports.createreview = async (req, res) => {
  try {
   
    const hotelId = req.body.hotelId;
    const userId = req.body.userId;
    const review = req.body.review;
    const rating = req.body.rating;
    const hoteldata = await hotelSchema.findById({_id: hotelId});
   // console.log(hoteldata)
    if(!hoteldata || hoteldata.length==0){
      return res.status(404).json({ message: "Hotel Not Found" })
        }else{
    const userdata = await userSchema.findById({_id: userId});
   // console.log(userdata)
    if(!userdata || userdata.length==0){
      return res.status(404).json({ message: "user Not Found" })
    }
   
const reviewdata=await reviewSchema.create({hotel:hoteldata,user:userdata,review,rating})
console.log(reviewdata)
//const hoteldata =await  .findById({_id:hotelId})

hoteldata.reviews=reviewdata
//console.log(hoteldata)
    return res.status(200).json({ msg: "revie details", data: hoteldata });
    }
  }
   catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};


exports.getallreview = async (req, res) => {
  try {
    const allreview = await reviewSchema .find({})
     
    console.log(allreview);
    if(!allreview || allreview.length==0){return res.status(404).json({ message: "no review found"})
  
    } else {
      return res.status(200).json({
        allreview,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};


exports.getreviewbyid = async (req, res) => {
  try {
    const reviewbyid = await reviewSchema .findById({_id:req.params.id})
    console.log(reviewbyid); 
  
    if(!reviewbyid || reviewbyid.length==0){return res.status(404).json({ message: "no review found"})
  
    } else {
      return res.status(200).json({
        reviewbyid,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};


exports.Updatereview = async (req, res) => {
  try {
    
    const Updatereview = await reviewSchema
      .findOneAndUpdate(
        { _id: req.params.id },
        {
        
           $set: {review:req.body.review  } 
        }
      )

      .exec();
    console.log(Updatereview);
    res.status(200).send({
      message: "Updatereview Profile Updated ",
      data: Updatereview,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};


exports.deletereview = async (req, res) => {
  try {
    const id = req.params.id;
    await reviewSchema.deleteOne({ _id: id });
    res.status(200).send({ message: "data deleted " });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};