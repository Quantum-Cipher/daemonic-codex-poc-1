const { onRequest } = require("firebase-functions/v2/https");
const axios = require("axios");
const cors = require("cors")({ origin: true });
const { rateLimit } = require("express-rate-limit");
const logger = require("firebase-functions/logger");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  standardHeaders: true,
  legacyHeaders: false,
});

exports.daemonStatus = onRequest((req, res) => {
  cors(req, res, () => {
    limiter(req, res, async () => {
      try {
        const target = process.env.TARGET_URL || "http://34.49.75.175";
        const response = await axios.get(target, { timeout: 3000 });
        logger.info(`Fetched status from ${target}`, { structuredData: true });
        res.json({
          status: "ONLINE",
          gateway: "Daemonic Proxy v1.1",
          upstream_data: response.data
        });
      } catch (error) {
        logger.error(`Fetch failed: ${error.message}`, { structuredData: true });
        res.status(500).json({
          status: "UNREACHABLE",
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    });
  });
});
