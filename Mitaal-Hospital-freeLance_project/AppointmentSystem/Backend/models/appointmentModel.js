const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    doctorId: {
      type: String,
      required: true,
    },
    doctorInfo: {
      type: mongoose.Schema.Types.ObjectId, ref: 'doctors'
    },
    date: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
    time: {
      type: String,
      required: true,
    },
  },
);

const appointmentModel = mongoose.model("appointments", appointmentSchema);

module.exports = appointmentModel;
