const express = require('express');
const {getbookByAdmin,UpdatebookingByAdmin,deletebookingByAdmin,Updatebooking,deletebooking} = require('../controller/admin/bookNow');
const {bookingProfileByUser,UpdatebookingByUser} = require('../controller/user/bookNow');
const {getbookByVendor,UpdatebookingByVendor,deletebookingByVendor} = require('../controller/vendor/booknow');

const booknowRouter = express.Router();

//ADMIN
booknowRouter.get('/getbookByAdmin', getbookByAdmin);
// booknowRouter.get('/getbook',getbooking);
// booknowRouter.get('/getbookbyId/:id',getbookingById);
booknowRouter.put('/UpdatebookingByAdmin/:id',UpdatebookingByAdmin);
 booknowRouter.delete('/deletebookingByAdmin/:id',deletebookingByAdmin);

//USER
booknowRouter.post('/bookingProfileByUser', bookingProfileByUser);//UpdatebookingByUser
// booknowRouter.put('/UpdatebookingByUser', UpdatebookingByUser);

//VENDOR
booknowRouter.get('/getbookByVendor/:vendorId',getbookByVendor);
// booknowRouter.get('/getbookbyId/:id',getbookingById);
booknowRouter.put('/UpdatebookingByVendor/:id',UpdatebookingByVendor);
booknowRouter.delete('/deletebookingByVendor/:id',deletebookingByVendor);


 module.exports = booknowRouter;
