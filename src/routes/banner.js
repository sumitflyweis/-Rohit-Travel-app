//imagesRouter
const express = require("express");
const {
  addBanner,
  getBannerById,
  getbanner,
  Deletebanner,
  UpdateBanner,
} = require("../controller/admin/banner");
const {
    getBannerByIdByUser,
    getbannerByUser,
} = require("../controller/user/banner");
const { getBannerByIdByVendor,getbannerByVendor } = require("../controller/vendor/banner");
const imagesRouter = express.Router();

//USER
imagesRouter.get("/getBannerByIdByUser/:id", getBannerByIdByUser);
imagesRouter.get("/getbannerByUser", getbannerByUser);

//VENDOR
imagesRouter.get("/getBannerByIdByVendor/:id", getBannerByIdByVendor);
imagesRouter.get("/getbannerByVendor", getbannerByVendor);

//ADMIN
imagesRouter.post("/addBanner", addBanner);
imagesRouter.get("/getBannerById/:id", getBannerById);
imagesRouter.get("/getbanner", getbanner);
imagesRouter.put("/UpdateBanner/:id", UpdateBanner);
imagesRouter.delete("/Deletebanner/:id", Deletebanner);

module.exports = imagesRouter;
