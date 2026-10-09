const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const SECRET = process.env.JWT_SECRET || "demo-secret-do-not-use";

// Deliberately vulnerable: verifies a token from the request with jsonwebtoken 8.5.1.
router.post("/login", (req, res) => {
  try {
    const user = jwt.verify(req.body.token, SECRET);
    res.json({ user });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

module.exports = router;