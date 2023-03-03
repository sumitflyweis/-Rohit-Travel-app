const express = require('express');
const {getAllpayment,getbooking,getbookingById,Updatebooking,deletebooking} = require('../controller/admin/payment');
const {bookingProfileByUser} = require('../controller/user/bookNow');
const {UpdatebookingByVendor} = require('../controller/vendor/booknow');
const {CreatePaymentOrder,GetPaymentsByUserId,GetAllPayments} = require('../controller/user/payment');
const {getAllpaymentByvendor} = require('../controller/vendor/payments');


const paymentRouter = express.Router();

//ADMIN
// booknowRouter.post('/createbook', bookingProfile);
paymentRouter.get('/getAllpayment',getAllpayment);
// paymentRouter.get('/getbookbyId/:id',getbookingById);
// booknowRouter.put('/updatebook/:id',Updatebooking);
// booknowRouter.delete('/deletebook/:id',deletebooking);

//USER
paymentRouter.get('/GetPaymentsByUserId/:user', GetPaymentsByUserId);
paymentRouter.post('/CreatePaymentOrder/:id',CreatePaymentOrder);
paymentRouter.get('/GetAllPayments',GetAllPayments);


//VENDOR
paymentRouter.get('/getAllpaymentByvendor/:vendor',getAllpaymentByvendor);
// booknowRouter.get('/getbookbyId/:id',getbookingById);
// booknowRouter.put('/UpdatebookingByVendor/:id',UpdatebookingByVendor);
// booknowRouter.delete('/deletebook/:id',deletebooking);


 module.exports = paymentRouter;
