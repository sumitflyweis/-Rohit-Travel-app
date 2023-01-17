const express = require('express'); 
const {createEnquiryAdmin,getEnqiryAdmin,getEnqiryAdminById,updateEquiryAdmin,deleteEnquiryAdmin} = require('../controller/admin/enquiryform');
const {getenquiry,getenquiryById,Updateenquiry,deleteenquiry} = require('../controller/vendor/enquiryform');
const {createEnquiry} = require('../controller/user/enquiryform');
const enquiryRouter = express.Router();

//USER
enquiryRouter.post('/createEnquiry', createEnquiry);

//VENDOR

enquiryRouter.get('/getenquiry',getenquiry);
enquiryRouter.get('/getenquiryById/:id',getenquiryById);
enquiryRouter.put('/Updateenquiry/:id',Updateenquiry);
enquiryRouter.delete('/deleteenquiry/:id',deleteenquiry);

//ADMIN
enquiryRouter.post('/createEnquiryAdmin', createEnquiryAdmin);
enquiryRouter.get('/getEnqiryAdmin',getEnqiryAdmin);
enquiryRouter.get('/getEnqiryAdminById/:id',getEnqiryAdminById);
enquiryRouter.put('/updateEquiryAdmin/:id',updateEquiryAdmin);
enquiryRouter.delete('/deleteEnquiryAdmin/:id',deleteEnquiryAdmin);


module.exports = enquiryRouter;