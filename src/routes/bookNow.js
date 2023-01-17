const express = require('express');
const {bookingProfile,getbooking,getbookingById,Updatebooking,deletebooking} = require('../controller/admin/bookNow');

const booknowRouter = express.Router();

booknowRouter.post('/createbook', bookingProfile);
// booknowRouter.get('/getbook',getbooking);
// booknowRouter.get('/getbookbyId/:id',getbookingById);
// booknowRouter.put('/updatebook/:id',Updatebooking);
// booknowRouter.delete('/deletebook/:id',deletebooking);

 module.exports = booknowRouter;
