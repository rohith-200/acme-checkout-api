// Intentionally vulnerable demo app for ThreatWatch. Do not deploy.
const express = require("express");
const settingsRouter = require("./routes/settings");
const ordersRouter = require("./routes/orders");

const app = express();
app.use(express.json());

app.use("/settings", settingsRouter);
app.use("/orders", ordersRouter);

app.get("/health", (req, res) => res.json({ ok: true }));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`acme-checkout-api listening on port ${port}`));