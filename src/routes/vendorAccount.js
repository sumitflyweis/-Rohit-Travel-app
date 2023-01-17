const express = require("express");
const {
    VendorloginProfile,
    VendorProfile,
    VendorUpdate,
  VendorAllUsers,
  VendorgetbyId,
  deleteVendor
} = require("../controller/vendor/vendorAccount");
const {
  VendorloginProfile1,
  VendorProfile1,
  VendorUpdate1,
VendorAllUsers1,
VendorgetbyId1,
deleteVendorAdmin
} = require("../controller/admin/vendorAccount");
const { authentication, authorisationbyBId_VENDOR } = require("../middleware");

const vendorRouter = express.Router();

//VENDOR
vendorRouter.post("/loginVendor",VendorloginProfile);
vendorRouter.post("/signupVendor", VendorProfile);
vendorRouter.get("/allusersVendor", VendorAllUsers);
vendorRouter.get("/getbyIdVendor/:id", authentication,
authorisationbyBId_VENDOR, VendorgetbyId);
vendorRouter.delete("/deletevendor/:id", authentication,
authorisationbyBId_VENDOR, deleteVendor);
vendorRouter.put(
  "/updateVendor/:id",
  authentication,
  authorisationbyBId_VENDOR,
  VendorUpdate
);

//============================================================

//ADMIN
vendorRouter.post("/loginVendor1",VendorloginProfile1);
vendorRouter.post("/signupVendor1", VendorProfile1);
vendorRouter.get("/allusersVendor1", VendorAllUsers1);
vendorRouter.get("/getbyId1/:id", authentication,
authorisationbyBId_VENDOR, VendorgetbyId1);
vendorRouter.delete("/delete1/:id", authentication,
authorisationbyBId_VENDOR, deleteVendorAdmin);
vendorRouter.put(
  "/updateVendor1/:id",
  authentication,
  authorisationbyBId_VENDOR,
  VendorUpdate1
);


module.exports = vendorRouter;
