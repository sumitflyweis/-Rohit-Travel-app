// const mongoose = require("mongoose");
// const objectId=mongoose.Schema.Types.ObjectId

// const tourSchema = mongoose.Schema({
//   city: {
//     type: String,
//   },
//  // customerProfile
// });
// const tourModel = mongoose.model("tour+hotel", tourSchema);
// module.exports = tourModel;

const mongoose = require('mongoose');
const objectId=mongoose.Schema.Types.ObjectId

const personSchema = mongoose.Schema({
 
  name: {type:String},
  age: {type:Number},
  stories: [{ type: objectId, ref: 'Story' }]
});


const Person = mongoose.model('Person', personSchema);
module.exports = Person;
