const express = require('express'); 
const {populartourProfileVendor,getpopulartourVendor,UpdatepopulartourVendor,deletepopulartourVendor} = require('../controller/vendor/popularTour');
const {populartourProfile1,getpopulartour1,getpopulartour1ById,Updatepopulartour1,deletepopulartour1} = require('../controller/admin/popularTour');


const populartourRouter = express.Router();
 
// //VENDOR
populartourRouter.post('/populartourVendor', populartourProfileVendor);
populartourRouter.get('/getpopulartourVendor/:touristDestination',getpopulartourVendor);
populartourRouter.put('/UpdatepopulartourVendor/:id',UpdatepopulartourVendor);
populartourRouter.delete('/deletepopulartourVendor/:id',deletepopulartourVendor);

// // ADMIN

populartourRouter.post('/populartourProfile1', populartourProfile1);
populartourRouter.get('/getpopulartour1',getpopulartour1);
populartourRouter.get('/getpopulartour1ById/:id',getpopulartour1ById);
populartourRouter.put('/Updatepopulartour1/:id',Updatepopulartour1);
populartourRouter.delete('/deletepopulartour1/:id',deletepopulartour1);


module.exports = populartourRouter;