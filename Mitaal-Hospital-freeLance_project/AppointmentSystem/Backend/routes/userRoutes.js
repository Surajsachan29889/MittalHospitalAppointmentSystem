const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocotrsController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController,
  sendemail
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//APply Doctor || POST
router.post("/apply-doctor", applyDoctorController);


router.post("/sendemail", sendemail);

//Notifiaction  Doctor || POST
router.post(
  "/get-all-notification",
  getAllNotificationController
);
//Notifiaction  Doctor || POST
router.post(
  "/delete-all-notification",
  deleteAllNotificationController
);

//GET ALL DOC
router.get("/getAllDoctors",getAllDocotrsController);

//BOOK APPOINTMENT
router.post("/book-appointment",  bookeAppointmnetController);

//Booking Avliability
router.post(
  "/booking-availbility",
  bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments", userAppointmentsController);

module.exports = router;
