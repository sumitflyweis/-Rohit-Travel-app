const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const multer = require("multer");
const app = express();
const bodyparser = require("body-parser");

// const heroratingRouter = require("./routes/hero-rating");
// const heroprivacypolicyRouter = require("./routes/heroprivacypolicy");
// const helpandsupportRouter = require("./routes/helpandsupportforhero");
// const blockuserRouter = require("./routes/blockuser");
const customerRouter = require("./routes/CustomerAccount");
const vendorRouter = require("./routes/vendorAccount");
const locationRouter = require("./routes/searchByhotel");
//  const tourRouter=require("./routes/tourSearch");
//  const bookingRouter=require("./routes/bookingform")
const populartourRouter = require("./routes/popularTour");
// const popularExperienceRouter=require("./routes/popularexperiences")
const tourHotelRouter = require("./routes/tour+hotel");
const booknowRouter = require("./routes/bookNow");
const reviewRouter = require("./routes/review");
//const =require("./routes/popularTour")

// const projectListRouter = require("./routes/projectList");
//const multerRouter=require("./routes/banner")

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

// app.use("/api/helpandsupportRouter", helpandsupportRouter);
// app.use("/blockuserRouter", blockuserRouter);
app.use("/customerRouter", customerRouter);
app.use("/vendorRouter", vendorRouter);
app.use("/locationRouter", locationRouter);
//  app.use("/tourRouter", tourRouter);
//  app.use("/bookingRouter", bookingRouter);
app.use("/populartourRouter", populartourRouter);
//app.use("/popularExperienceRouter", popularExperienceRouter);
app.use("/tourHotelRouter", tourHotelRouter);
app.use("/booknowRouter", booknowRouter);
app.use("/reviewRouter", reviewRouter);

// app.use("/projectListRouter", projectListRouter);
//app.use("/multerRouter",multerRouter)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
