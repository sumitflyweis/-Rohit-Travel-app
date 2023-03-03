const express = require('express'); 
const {loginProfileAdmin,userProfileAdmin,customerUpdateAdmin,AllUsersAdmin,deleteUserAdmin,getUserByIdAdmin} = require('../controller/admin/CustomerAccount');
const {loginProfile1,socialLogin,userProfile1,customerUpdate1,AllUsers1,getUserById,deleteUserById,customerUpdatePassword,verifySignIn} = require('../controller/user/customerAccount');
const {CreatePaymentOrder} = require('../controller/user/payment');
const {authentication,authorisationbyBId} = require('../middleware')

const customerRouter = express.Router();
//=========================================================
// ADMIN
customerRouter.post('/loginAdmin', loginProfileAdmin);
customerRouter.post('/signupAdmin', userProfileAdmin);
customerRouter.get('/allusersAdmin',AllUsersAdmin);
customerRouter.get('/getUserByIdAdmin/:id',getUserByIdAdmin);
customerRouter.put('/updateAdmin/:id',customerUpdateAdmin);
customerRouter.delete('/deleteAdmin/:id',deleteUserAdmin);

//============================================================

// USER
customerRouter.post('/login1', loginProfile1);
customerRouter.post('/socialLogin', socialLogin)
customerRouter.post('/signup1', userProfile1);
customerRouter.post('/verifySignIn', verifySignIn);
// customerRouter.get('/allusers1',AllUsers1);
customerRouter.get('/getUserById/:id',authentication,authorisationbyBId,getUserById);
customerRouter.put('/update1/:id',authentication,authorisationbyBId,customerUpdate1);//
customerRouter.put('/customerUpdatePassword/:id',authentication,authorisationbyBId,customerUpdatePassword);
customerRouter.delete('/delete/:id',authentication,authorisationbyBId,deleteUserById);
// customerRouter.post('/CreatePaymentOrder',CreatePaymentOrder);


 module.exports = customerRouter;