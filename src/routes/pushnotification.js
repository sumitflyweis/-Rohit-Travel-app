const express = require('express') 
const { sendNotificationstouser,getallNotifications,getnotificationsById,updateNotification,deleteNotification} = require('../controller/admin/pushnotification')
const { getnotificationsByIdByUser,getallNotificationsByUser} = require('../controller/user/pushnotification')
const { getnotificationsByIdByVendor,getallnotificationsByVendor} = require('../controller/vendor/pushnotification')

const notificationRouter = express.Router()
//ADMIN
notificationRouter.post('/sendNotificationstouser',sendNotificationstouser)
// notificationRouter.get('/getallNotifications',getallNotifications)//getnotificationsById
// notificationRouter.get('/getnotificationsById',getnotificationsById)
// notificationRouter.put('/updateNotification/:role',updateNotification)
//  notificationRouter.delete('/deleteNotification/:role',deleteNotification)

//USER
// notificationRouter.get('/getnotificationsByIdByUser/:id',getnotificationsByIdByUser)
// notificationRouter.get('/getallNotificationsByUser',getallNotificationsByUser)

// //VENDOR
// notificationRouter.get('/getnotificationsByIdByVendor/:id',getnotificationsByIdByVendor)
// notificationRouter.get('/getallusersByVendor',getallnotificationsByVendor)
  

module.exports =notificationRouter