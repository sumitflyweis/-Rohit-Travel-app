const path = require("path");
require("dotenv").config();
const bookNow = require("../../model/bookNow");
const tour = require("../../model/popularTour");
const moment = require("moment");

exports.bookingProfileuser = async (req, res) => {
  try {
    let {
      start_date,
      end_date,
      DiscountedPrice,
      price,
      discount,
      Activity,
      Booked,
      touristDestination,
      Status,
    } = req.body;


    const bookingfind = await bookNow.find({
      start_date:start_date,end_date:end_date,touristDestination:touristDestination
    });

    if (!bookingfind || bookingfind.length == 0) {
      var b = moment(start_date, "DD/MM/YYYY HH:mm").toString();
      var c = moment(end_date, "DD/MM/YYYY HH:mm").toString();
      console.log(b + " " + c);
      DiscountedPrice = price - (discount / 100) * price;
      const bookNowData = await bookNow.create({
        start_date: b,
        end_date: c,
        price: price,
        discount: discount,
        DiscountedPrice,
        Activity: Activity,
        touristDestination: touristDestination,
        Booked:Booked,
        Status: Status,
      });
      console.log(bookNowData);
      return res.status(200).json({
        id: bookNowData._id,
        message: "booking Created ",
        data: bookNowData,
      });
    } else {
      return res.status(400).send({ msg: " booking already present" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
