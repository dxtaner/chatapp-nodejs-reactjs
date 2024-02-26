const redis = require("redis");
require("dotenv").config();

const getClient = () => {
  const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    db: process.env.REDIS_DB_INDEX,
  });

  client.on("error", (err) => {
    console.error("Redis error:", err);
  });

  return client;
};

module.exports = getClient();
