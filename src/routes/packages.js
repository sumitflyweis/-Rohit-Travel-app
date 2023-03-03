const express = require("express");
const {
  getallpackagesByAdmin,
  getpackagesByIdByAdmin,
  DeleteByAdmin
} = require("../controller/admin/packages");
const {
  getallpackagesByUser,
  getpackagesByIdByUser,
  
} = require("../controller/user/packages");
const {
  packagesByVendor,
  UpdatePackagesByVendor,
  getallTypeOfpackageges,
  getallTypeOfpackagegesByVendor
} = require("../controller/vendor/packages");
const packagesRouter = express.Router();

//USER
packagesRouter.get("/getallpackagesByUser", getallpackagesByUser);
packagesRouter.get("/getpackagesByIdByUser/:id", getpackagesByIdByUser);//


//VENDOR
packagesRouter.post("/packagesByVendor", packagesByVendor); //
packagesRouter.put("/UpdatePackagesByVendor/:id", UpdatePackagesByVendor);
packagesRouter.post("/getallTypeOfpackageges", getallTypeOfpackageges)
packagesRouter.get("/getallTypeOfpackagegesByVendor", getallTypeOfpackagegesByVendor)


//ADMIN
// packagesRouter.post('/createEnquiryAdmin', createEnquiryAdmin);
packagesRouter.get("/getallpackagesByAdmin", getallpackagesByAdmin);
packagesRouter.get("/getpackagesByIdByAdmin/:id", getpackagesByIdByAdmin);
// packagesRouter.put('/updateEquiryAdmin/:id',updateEquiryAdmin);
 packagesRouter.delete('/DeleteByAdmin/:id',DeleteByAdmin);

module.exports = packagesRouter;
