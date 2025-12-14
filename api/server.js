const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "v1";

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.get("/api", (req, res) => {
  res.json({
    app: "customer-portal-api",
    version: VERSION,
    hostname: os.hostname(),
    time: new Date().toISOString(),
  });
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));
