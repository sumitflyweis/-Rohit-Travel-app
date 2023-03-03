const privacy = require('../../model/privacy')

exports.getAllprivacyUser = async(req,res) => {
    try {
        const data = await privacy.find();
        console.log(data);
        res.status(200).json({
            terms : data
        })
        
    }catch(err)
    {
        res.status(400).send({mesage : err.mesage});
    }
}