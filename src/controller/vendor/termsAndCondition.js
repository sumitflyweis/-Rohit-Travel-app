
const terms = require('../../model/termsAndCondition')



exports.gettermsbyVendor = async(req,res) => {
    try {
        const data = await terms.find();
        console.log(data);
      return  res.status(200).json({
            terms : data
        })
        
    }catch(err)
    {
      return  res.status(400).send({mesage : err.mesage});
    }
}