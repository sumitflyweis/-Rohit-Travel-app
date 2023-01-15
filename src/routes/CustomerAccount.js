const express = require('express'); 
const {loginProfileAdmin,userProfileAdmin,customerUpdateAdmin,AllUsersAdmin,deleteUserAdmin,getUserByIdAdmin} = require('../controller/admin/CustomerAccount');
const {loginProfile1,userProfile1,customerUpdate1,AllUsers1} = require('../controller/user/customerAccount');
const {authentication,authorisationbyBId} = require('../middleware')
//const verifyToken = require('../middleware/auth_check');

const customerRouter = express.Router();
customerRouter.post('/loginAdmin', loginProfileAdmin);
customerRouter.post('/signupAdmin', userProfileAdmin);
customerRouter.get('/allusersAdmin',AllUsersAdmin);
customerRouter.get('/getUserByIdAdmin/:id',authentication,authorisationbyBId,getUserByIdAdmin);
customerRouter.put('/updateAdmin/:id',authentication,authorisationbyBId,customerUpdateAdmin);
customerRouter.delete('/deleteAdmin/:id',authentication,authorisationbyBId,deleteUserAdmin);

//============================================================


customerRouter.post('/login1', loginProfile1);
customerRouter.post('/signup1', userProfile1);
customerRouter.get('/allusers1',AllUsers1);
customerRouter.put('/update1/:id',authentication,authorisationbyBId,customerUpdate1);


 module.exports = customerRouter;