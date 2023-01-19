const express = require('express');
const {bookingProfile,getbooking,getbookingById,Updatebooking,deletebooking} = require('../controller/admin/bookNow');
const {bookingProfileuser} = require('../controller/user/bookNow');
const {getbookingVENDOR,getbookingByIdVENDOR,UpdatebookingVENDOR,deletebookingVENDOR} = require('../controller/vendor/bookNow');

const booknowRouter = express.Router();
//ADMIN
booknowRouter.post('/createbook', bookingProfile);
booknowRouter.get('/getbook',getbooking);
booknowRouter.get('/getbookbyId/:id',getbookingById);
booknowRouter.put('/updatebook/:id',Updatebooking);
booknowRouter.delete('/deletebook/:id',deletebooking);

//USER
booknowRouter.post('/createbookuser', bookingProfileuser);

//VENDOR
booknowRouter.get('/getbookVENDOR',getbookingVENDOR);
booknowRouter.get('/getbookbyIdVENDOR/:id',getbookingByIdVENDOR);
booknowRouter.put('/updatebookVENDOR/:id',UpdatebookingVENDOR);
booknowRouter.delete('/deletebookVENDOR/:id',deletebookingVENDOR);

 module.exports = booknowRouter;
