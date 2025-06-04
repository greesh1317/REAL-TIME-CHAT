const express = require("express");
const router = express.Router();

// Health check route
router.get("/", (req, res) => {
  res.status(200).json({ response: "Server is up and running." });
});

module.exports = router;
