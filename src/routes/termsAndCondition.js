const express = require('express'); 
const terms = require('../controller/admin/termsAndCondition');
const terms1 = require('../controller/user/termsAndCondition');
const terms2 = require('../controller/vendor/termsAndCondition');
//const verifyToken = require('../middleware/auth_check')

const termsRouter = express.Router()


//ADMIN
termsRouter.post('/terms',   terms.addterms);
termsRouter.get('/termsAll',   terms.getAllterms);
termsRouter.put('/Updateterms/:id', terms.updateterms);
termsRouter.delete('/Deleteterms/:id', terms.DeleteTerms);

//USER
termsRouter.get('/gettermsByUser', terms1.gettermsbyUser);

//VENDOR
termsRouter.get('/gettermsByVendor', terms2.gettermsbyVendor);


module.exports = termsRouter;