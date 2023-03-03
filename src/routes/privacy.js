const express = require('express'); 
const terms = require('../controller/admin/privacy');
const terms1 = require('../controller/user/privacy');
const terms2 = require('../controller/vendor/privacy');
//const verifyToken = require('../middleware/auth_check')

const privacyRouter = express.Router()


//ADMIN
privacyRouter.post('/addprivacy',   terms.addprivacy);
privacyRouter.get('/getAllprivacy',   terms.getAllprivacy);
privacyRouter.put('/updateprivacy/:id', terms.updateprivacy);
privacyRouter.delete('/deleteprivacy/:id', terms.deleteprivacy);

//USER
privacyRouter.get('/getAllprivacyUser', terms1.getAllprivacyUser);

//VENDOR
privacyRouter.get('/getAllprivacyVendor', terms2.getAllprivacyVendor);


module.exports = privacyRouter;