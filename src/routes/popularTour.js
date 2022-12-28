const express = require('express'); 
const {populartourProfile,getpopulartour,Updatepopulartour,deletepopulartour} = require('../controller/popularTour');
//const verifyAdmin = require('../middleware/isAdmin')
//const verifyToken = require('../middleware/auth_check');

const populartourRouter = express.Router();
 

populartourRouter.post('/populartourProfile', populartourProfile);
populartourRouter.get('/getpopulartour',getpopulartour);
populartourRouter.put('/Updatepopulartour/:id',Updatepopulartour);
populartourRouter.delete('/deletepopulartour/:id',deletepopulartour);

module.exports = populartourRouter;