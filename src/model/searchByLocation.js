const mongoose = require('mongoose'); 


const LocationSchema   = mongoose.Schema({
    city: {
        type: String, 
    }, 
  hotel: [{
        type: String}]
  
})

const LocationModel = mongoose.model('locationProfile', LocationSchema); 

module.exports = LocationModel;