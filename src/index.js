const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const multer = require("multer");
const app = express();
const bodyparser = require("body-parser");

const customerRouter = require("./routes/CustomerAccount");
const vendorRouter = require("./routes/vendorAccount");
const enquiryRouter = require("./routes/enquiryform");
const populartourRouter = require("./routes/popularTour");
const booknowRouter = require("./routes/bookNow");
const paymentRouter = require("./routes/payment");
const notificationRouter = require("./routes/pushnotification");

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

app.use("/customerRouter", customerRouter);
app.use("/vendorRouter", vendorRouter);
app.use("/enquiryRouter", enquiryRouter);
app.use("/populartourRouter", populartourRouter);
app.use("/booknowRouter", booknowRouter);
app.use("/notificationRouter", notificationRouter);
app.use("/paymentRouter", paymentRouter);
//app.use("/paymentRouter", paymentRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
