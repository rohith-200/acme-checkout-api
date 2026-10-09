const express = require("express");

const router = express.Router();

const orders = [];
let nextId = 1;

router.get("/", (req, res) => {
  res.json({ orders });
});

router.post("/", (req, res) => {
  const { item, quantity } = req.body || {};

  if (typeof item !== "string" || item.trim() === "") {
    return res.status(400).json({ error: "item must be a non-empty string" });
  }
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 100) {
    return res.status(400).json({ error: "quantity must be a whole number from 1 to 100" });
  }

  const order = { id: nextId++, item: item.trim(), quantity, createdAt: new Date().toISOString() };
  orders.push(order);
  res.status(201).json({ order });
});

module.exports = router;