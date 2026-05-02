const Scholarship = require("../models/Scholarship");

// CREATE
exports.createScholarship = async (req, res) => {
  try {
    const data = await Scholarship.create(req.body);

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL
exports.getAllScholarships = async (req, res) => {
  try {
    const data = await Scholarship.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      total: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
exports.deleteScholarship = async (req, res) => {
  try {
    await Scholarship.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};