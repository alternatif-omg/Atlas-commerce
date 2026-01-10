import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
  maxRetriesPerRequest: null,   // 🔥 jangan pernah crash
  enableReadyCheck: true,
  reconnectOnError(err) {
    console.error("Redis reconnecting:", err.message);
    return true;
  },
  retryStrategy(times) {
    // exponential backoff
    return Math.min(times * 100, 3000);
  },
  tls: {
    rejectUnauthorized: false
  }
});

redis.on("connect", () => {
  console.log(" Redis connected");
});

redis.on("ready", () => {
  console.log(" Redis ready");
});

redis.on("error", (err) => {
  console.error(" Redis error:", err.message);
});

redis.on("close", () => {
  console.warn(" Redis connection closed");
});

redis.on("reconnecting", () => {
  console.log("♻️ Redis reconnecting...");
});
