require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path"); // ✅ FIXED

const app = express();

const dns = require("dns");
dns.setServers(["1.1.1.1", "1.0.0.1", "8.8.8.8", "8.8.4.4"]);

app.use(cookieParser());

// middleware
app.use(cors({
  origin: "http://localhost:5173",
  // origin: "/",
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
const scholarshipRoutes = require("./routes/scholarshipRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/scholarship", scholarshipRoutes);
app.use("/api/auth", authRoutes);

// production setup
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "Client", "dist")));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "Client", "dist", "index.html")); // ✅ FIXED
  });
}

// DB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err.message));

// start server
const PORT = process.env.PORT || 5000; // ✅ FIXED

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});