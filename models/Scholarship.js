const mongoose = require("mongoose");

const scholarshipSchema = new mongoose.Schema(
  {
    fullName: { type: String,required: true },
    whatsappNumber: { type: String,  },
    email: { type: String,  },
    currentLocation: { type: String,  },

    educationStatus: {
      type: String,
      enum: [
        "Undergraduate",
        "Final Year Student",
        "Graduate",
        "Working Professional",
      ],
    },

    upscAttemptTarget: {
      type: String,
      enum: ["2027", "2028", "2029+"],
    },

    appearedBefore: {
      type: String,
      enum: ["Yes", "No"],
    },

    medium: {
      type: String,
      enum: ["English", "Hindi", "Hinglish"],
    },

    studyMode: {
      type: String,
      enum: ["Online", "Offline"],
    },

    reason: { type: String,  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Scholarship", scholarshipSchema);