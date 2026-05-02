const express = require("express");
const router = express.Router();

const {
  createScholarship,
  getAllScholarships,
  deleteScholarship,
} = require("../controllers/scholarshipController");
const { isAuthenticated, isAdmin } = require("../controllers/middleware/authMiddleware");

router.post("/create", createScholarship);
router.delete(
  "/delete/:id",
  isAuthenticated,
  isAdmin,
  deleteScholarship
);

// optional: protect all
router.get("/all", isAuthenticated, isAdmin, getAllScholarships);
module.exports = router;