const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  getProfile,
} = require("../controllers/authController");
const { isAuthenticated, isAdmin } = require("../controllers/middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/me", isAuthenticated, isAdmin, getProfile);
router.get("/logout", logout);

module.exports = router;