const express = require('express'); 
const {locationProfile,gethotel,Updatelocation,deletelocation} = require('../controller/searchByLocation');
//const verifyAdmin = require('../middleware/isAdmin')
//const verifyToken = require('../middleware/auth_check');

const locationRouter = express.Router();


locationRouter.post('/create', locationProfile);

locationRouter.get('/gethotel',gethotel);
locationRouter.put('/update/:id',Updatelocation);
 locationRouter.delete('/delete/:id',deletelocation);



module.exports = locationRouter;