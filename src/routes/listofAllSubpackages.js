//
const express = require("express");
const {
    getallTypeOfsubpackagegesBYAdmin,
    getallTypeOfsubpackagegesByIdByAdmin,
} = require("../controller/admin/listofAllSubpackages");
const {
    getallTypeOfsubpackagegesByUser,
    getallTypeOfsubpackagegesById,
  
} = require("../controller/user/listofAllSubpackages");
const {
    subpackagesByVendor,
    getallTypeOfsubpackageges,
    UpdatesubPackagesByVendor,
  getallTypeOfpackageges
} = require("../controller/vendor/listofAllSubpackages");
const listOfAllPackagesRouter = express.Router();

//USER
 listOfAllPackagesRouter.get("/getallTypeOfsubpackageges", getallTypeOfsubpackagegesByUser);
 listOfAllPackagesRouter.get("/getallTypeOfsubpackagegesById/:id", getallTypeOfsubpackagegesById);//


//VENDOR
listOfAllPackagesRouter.post("/subpackagesByVendor", subpackagesByVendor); //
listOfAllPackagesRouter.get("/getallTypeOfsubpackageges", getallTypeOfsubpackageges);
listOfAllPackagesRouter.put("/UpdatesubPackagesByVendor/:id", UpdatesubPackagesByVendor);
// listOfAllPackagesRouter.post("/getallTypeOfpackageges", getallTypeOfpackageges)
// listOfAllPackagesRouter.delete('/deleteenquiry/:id',deleteenquiry);

//ADMIN
// listOfAllPackagesRouter.post('/createEnquiryAdmin', createEnquiryAdmin);
listOfAllPackagesRouter.get("/getallTypeOfsubpackagegesBYAdmin", getallTypeOfsubpackagegesBYAdmin);
listOfAllPackagesRouter.get("/getallTypeOfsubpackagegesByIdByAdmin/:id", getallTypeOfsubpackagegesByIdByAdmin);
// listOfAllPackagesRouter.put('/updateEquiryAdmin/:id',updateEquiryAdmin);
// listOfAllPackagesRouter.delete('/deleteEnquiryAdmin/:id',deleteEnquiryAdmin);

module.exports = listOfAllPackagesRouter;
