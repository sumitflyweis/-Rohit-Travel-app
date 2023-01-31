const express = require('express'); 
const {loginProfileAdmin,userProfileAdmin,customerUpdateAdmin,AllUsersAdmin,deleteUserAdmin,getUserByIdAdmin} = require('../controller/admin/CustomerAccount');
const {loginProfile1,userProfile1,customerUpdate1,AllUsers1,getUserById,deleteUserById} = require('../controller/user/customerAccount');
const {CreatePaymentOrder} = require('../controller/user/payment');
const {authentication,authorisationbyBId} = require('../middleware')

const customerRouter = express.Router();
//=========================================================
// ADMIN
customerRouter.post('/loginAdmin', loginProfileAdmin);
customerRouter.post('/signupAdmin', userProfileAdmin);
customerRouter.get('/allusersAdmin',AllUsersAdmin);
customerRouter.get('/getUserByIdAdmin/:id',authentication,authorisationbyBId,getUserByIdAdmin);
customerRouter.put('/updateAdmin/:id',authentication,authorisationbyBId,customerUpdateAdmin);
customerRouter.delete('/deleteAdmin/:id',authentication,authorisationbyBId,deleteUserAdmin);

//============================================================

// USER
customerRouter.post('/login1', loginProfile1);
customerRouter.post('/signup1', userProfile1);
customerRouter.get('/allusers1',AllUsers1);
customerRouter.get('/getUserById/:id',authentication,authorisationbyBId,getUserById);
customerRouter.put('/update1/:id',authentication,authorisationbyBId,customerUpdate1);
customerRouter.delete('/delete/:id',authentication,authorisationbyBId,deleteUserById);
// customerRouter.post('/CreatePaymentOrder',CreatePaymentOrder);


 module.exports = customerRouter;