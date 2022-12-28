const express = require('express'); 
const {tourProfile,gettour,Updatelocation,deletelocation} = require('../controller/tourSearch');
//const verifyAdmin = require('../middleware/isAdmin')
//const verifyToken = require('../middleware/auth_check');

const tourRouter = express.Router();
 

tourRouter.post('/create', tourProfile);
tourRouter.get('/gettour',gettour);
tourRouter.put('/update/:id',Updatelocation);
tourRouter.delete('/delete/:id',deletelocation);


  
module.exports = tourRouter;