const mongoose = require("mongoose");

const scholarshipSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    whatsappNumber: { type: String, required: true },
    email: { type: String, required: true },
    currentLocation: { type: String, required: true },

    educationStatus: {
      type: String,
      enum: [
        "Undergraduate",
        "Final Year Student",
        "Graduate",
        "Working Professional",
      ],
      required: true,
    },

    upscAttemptTarget: {
      type: String,
      enum: ["2027", "2028", "2029+"],
      required: true,
    },

    appearedBefore: {
      type: String,
      enum: ["Yes", "No"],
      required: true,
    },

    medium: {
      type: String,
      enum: ["English", "Hindi", "Hinglish"],
      required: true,
    },

    studyMode: {
      type: String,
      enum: ["Online", "Offline"],
      required: true,
    },

    reason: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Scholarship", scholarshipSchema);