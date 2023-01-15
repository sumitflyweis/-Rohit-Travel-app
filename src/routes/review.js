const express = require('express'); 
const {createreview,getallreview,getreviewbyid,Updatereview,deletereview} = require('../controller/admin/review');
//const verifyAdmin = require('../middleware/isAdmin')
//const verifyToken = require('../middleware/auth_check');

const reviewRouter = express.Router();
 

reviewRouter.post('/createreview', createreview);
reviewRouter.get('/getallreview',getallreview);
reviewRouter.get('/getreviewbyid/:id',getreviewbyid);
reviewRouter.put('/Updatereview/:id',Updatereview);
reviewRouter.delete('/deletereview/:id',deletereview);


// reviewRouter.put('/Updatepopulartour/:id',Updatepopulartour);
// reviewRouter.delete('/deletepopulartour/:id',deletepopulartour);

module.exports = reviewRouter;