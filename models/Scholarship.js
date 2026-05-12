const mongoose = require("mongoose");

const scholarshipSchema = new mongoose.Schema(
  {
    fullName: { type: String,required: true },
    whatsappNumber: { type: String,  },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Scholarship", scholarshipSchema);