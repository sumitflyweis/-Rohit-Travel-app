const express = require("express");
const {
    VendorloginProfile,
    VendorProfile,
    VendorUpdate,
  VendorAllUsers,
} = require("../controller/vendor/vendorAccount");
const { authentication, authorisationbyBId } = require("../middleware");
//const verifyToken = require('../middleware/auth_check');

const vendorRouter = express.Router();

vendorRouter.post("/loginVendor",VendorloginProfile);
// vendorRouter.post('/register', registerProfile);
vendorRouter.post("/signupVendor", VendorProfile);
//vendorRouter.post('/login',  AdminLogin);
vendorRouter.get("/allusersVendor", VendorAllUsers);
vendorRouter.put(
  "/updateVendor/:id",
  authentication,
  authorisationbyBId,
  VendorUpdate
);


module.exports = vendorRouter;
