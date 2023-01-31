// const Notification = require("../../model/pushnotification");


// exports.getallnotificationsByVendor = async (req, res) => {
//     try {
//       const notifications = await Notification.find();
//       if (!notifications || notifications.length === 0) {
//         return res.status(400).json({
//           message: "No notifications",
//         });
//       }
//       return res.status(200).json({
//         message: "notifications found",
//         data: notifications,
//       });
//     } catch (err) {
//       console.log(err.message);
//       return res.status(500).json({
//         message: "internal server error",
//       });
//     }
//   }
  
   
// exports.getnotificationsByIdByVendor = async (req, res) => {
//     try {
//       const notifications = await Notification.find({_id:req.params.id})
//       if (!notifications || notifications.length === 0) {
//         return res.status(400).json({
//           message: "No notifications",
//         });
//       }
//       return res.status(200).json({
//         message: "notifications found",
//         data: notifications,
//       });
//     } catch (err) {
//       console.log(err.message);
//       return res.status(500).json({
//         message: "internal server error",
//       });
//     }
//   }