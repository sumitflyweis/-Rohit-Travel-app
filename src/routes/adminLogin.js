const express = require("express");
const {adminProfile1,AdminLogin,AdminUpdate,deleteAdmin} = require("../controller/admin/adminLogin");
//const {} = require("../controller/admin/vendorAccount");
const { authentication, authorisationbyBId_VENDOR } = require("../middleware");

const admminLoginRouter = express.Router();


//============================================================

//ADMIN
admminLoginRouter.post("/adminProfile1", adminProfile1);
admminLoginRouter.post("/AdminLogin", AdminLogin);
admminLoginRouter.get("/AdminUpdate/:id", AdminUpdate);
admminLoginRouter.delete("/deleteAdmin/:id", deleteAdmin);


module.exports = admminLoginRouter;
