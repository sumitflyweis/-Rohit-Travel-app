const express = require('express');
const {bookingProfile,getbooking,getbookingById,Updatebooking,deletebooking} = require('../controller/admin/bookNow');
const {bookingProfileByUser} = require('../controller/user/bookNow');
const {getbookByVendor,UpdatebookingByVendor} = require('../controller/vendor/booknow');
const {CreatePaymentOrder,GetPaymentsByUserId} = require('../controller/user/payment');


const paymentRouter = express.Router();

//ADMIN
// booknowRouter.post('/createbook', bookingProfile);
// booknowRouter.get('/getbook',getbooking);
// booknowRouter.get('/getbookbyId/:id',getbookingById);
// booknowRouter.put('/updatebook/:id',Updatebooking);
// booknowRouter.delete('/deletebook/:id',deletebooking);

//USER
paymentRouter.get('/GetPaymentsByUserId/:user', GetPaymentsByUserId);
paymentRouter.post('/CreatePaymentOrder/:id',CreatePaymentOrder);

//VENDOR
// booknowRouter.get('/getbookByVendor',getbookByVendor);
// booknowRouter.get('/getbookbyId/:id',getbookingById);
// booknowRouter.put('/UpdatebookingByVendor/:id',UpdatebookingByVendor);
// booknowRouter.delete('/deletebook/:id',deletebooking);


 module.exports = paymentRouter;
