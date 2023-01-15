const express = require('express'); 
const {bookingProfile,getbooking,Updatebooking,deletebooking} = require('../controller/admin/bookNow');


const booknowRouter = express.Router();


booknowRouter.post('/createbook/:hotel', bookingProfile);
// booknowRouter.get('/getbook',getbooking);
// booknowRouter.get('/getbookbyId/:id',getbooking);
// booknowRouter.put('/updatebook/:id',Updatebooking);
// booknowRouter.delete('/deletebook/:id',deletebooking);
module.exports = booknowRouter;