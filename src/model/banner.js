const mongoose = require('mongoose');

const BannerSchema = mongoose.Schema({
    image: {
        type: String, 

    }, 
    desc:{
        type:String
    }
  
})

const bannermodel = mongoose.model('banner', BannerSchema);

module.exports = bannermodel;