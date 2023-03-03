const payments = require("../../model/payment");

exports.getAllpaymentByvendor = async (req, res) => {
    try {
      const paymentData = await payments.find({vendor: req.params.vendor});
      if (!paymentData || paymentData.length === 0) {
        return res.status(400).json({
          message: "No payment found with this id",
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