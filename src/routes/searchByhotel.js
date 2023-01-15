const express = require('express'); 
const {hotelProfile,gethotel,Updatehotel,deletehotel} = require('../controller/admin/searchByhotel');
//const verifyAdmin = require('../middleware/isAdmin')
//const verifyToken = require('../middleware/auth_check');

const locationRouter = express.Router();


locationRouter.post('/create', hotelProfile);

locationRouter.get('/gethotel/:id',gethotel);
locationRouter.put('/update/:id',Updatehotel);
 locationRouter.delete('/delete/:id',deletehotel);



module.exports = locationRouter;