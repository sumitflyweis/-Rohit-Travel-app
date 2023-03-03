const terms = require('../../model/termsAndCondition')



exports.gettermsbyUser = async(req,res) => {
    try {
        const data = await terms.find();
        console.log(data);
        res.status(200).json({
            terms : data
        })
        
    }catch(err)
    {
        res.status(400).send({mesage : err.mesage});
    }
}
  