const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const multer = require("multer");
const app = express();
const bodyparser = require("body-parser");

const customerRouter = require("./src/routes/CustomerAccount");
const vendorRouter = require("./src/routes/vendorAccount");
const enquiryRouter = require("./src/routes/enquiryform");
const populartourRouter = require("./src/routes/popularTour");
const booknowRouter = require("./src/routes/bookNow");
const paymentRouter = require("./src/routes/payment");
const notificationRouter = require("./src/routes/pushnotification");
const packagesRouter = require("./src/routes/packages");
const imagesRouter = require("./src/routes/banner")
const listOfAllPackagesRouter = require("./src/routes/listofAllSubpackages")
const termsAndConditionsRouter = require("./src/routes/termsAndCondition")
const privacyRouter = require ("./src/routes/privacy")
const admminLoginRouter = require("./src/routes/adminLogin")
//const termsRouter = require ("")
const serverless = require("serverless-http");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 2002;

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Db conneted succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/home",(req, res) => {
  res.status(200).send({msg:"Working App"});
});
app.use("/customerRouter", customerRouter);
app.use("/vendorRouter", vendorRouter);
app.use("/enquiryRouter", enquiryRouter);
app.use("/populartourRouter", populartourRouter);
app.use("/booknowRouter", booknowRouter);
app.use("/notificationRouter", notificationRouter);
app.use("/paymentRouter", paymentRouter);
app.use("/notificationRouter",notificationRouter)
app.use("/packagesRouter",packagesRouter)
app.use("/imagesRouter",imagesRouter)
app.use("/listOfAllPackagesRouter",listOfAllPackagesRouter)
app.use("/termsAndConditionsRouter",termsAndConditionsRouter)
app.use("/privacyRouter",privacyRouter)
app.use("/admminLoginRouter",admminLoginRouter)

//app.use("/paymentRouter", paymentRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = {
  handler: serverless(app),
};

