const express = require('express') 
const { sendNotificationsByAdmin,getallNotifications,getnotificationsById,updateNotification,deleteNotification} = require('../controller/admin/pushnotification')
const { getnotificationsByIdByUser,getallNotificationsByUser} = require('../controller/user/pushnotification')
const { getnotificationsByIdByVendor,getallnotificationsByVendor} = require('../controller/vendor/pushnotification')

const notificationRouter = express.Router()

//ADMIN
 notificationRouter.post('/sendNotificationsByAdmin',sendNotificationsByAdmin)
notificationRouter.get('/getallNotifications',getallNotifications)//getnotificationsById
notificationRouter.get('/getnotificationsById/:id',getnotificationsById)
notificationRouter.put('/updateNotification/:id',updateNotification)
 notificationRouter.delete('/deleteNotification/:id',deleteNotification)

//USER
notificationRouter.get('/getnotificationsByIdByUser/:id',getnotificationsByIdByUser)
notificationRouter.get('/getallNotificationsByUser',getallNotificationsByUser)

// //VENDOR
notificationRouter.get('/getnotificationsByIdByVendor/:id',getnotificationsByIdByVendor)
notificationRouter.get('/getallnotificationsByVendor',getallnotificationsByVendor)
  

module.exports =notificationRouter