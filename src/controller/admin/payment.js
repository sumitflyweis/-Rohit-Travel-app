const payments = require("../../model/payment");

exports.getAllpayment = async (req, res) => {
    try {
      const paymentData = await payments.find();
      if (!paymentData || paymentData.length === 0) {
        return res.status(400).json({
          message: "No payment",
        });
      }
      return res.status(200).json({
        message: "payment found",
        data: paymentData,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        message: "internal server error",
      });
    }
  }
  