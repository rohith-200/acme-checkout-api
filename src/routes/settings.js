const express = require("express");
const _ = require("lodash");

const router = express.Router();

const config = {
  currency: "USD",
  theme: "light",
  notifications: { email: true, sms: false },
};

// Deliberately vulnerable: merges untrusted request data with lodash 4.17.15.
router.post("/", (req, res) => {
  _.set(config, req.body.path, req.body.value);
  res.json({ settings: config });
});

router.get("/", (req, res) => {
  res.json({ settings: config });
});

module.exports = router;