// lib/logger.ts
type LogLevel = "info" | "error" | "warn" | "debug";

const base = {
  app: "vibrant-minds",
};

export const log = (
  level: LogLevel,
  message: string,
  meta?: Record<string, unknown>,
) => {
  const entry = {
    level,
    message,
    ...base,
    ...meta,
    timestamp: new Date().toISOString(),
  };

  // All Next.js server logs still end up in your hosting logs (Vercel, etc.)
  if (level === "error") {
    console.error(JSON.stringify(entry));
  } else if (level === "warn") {
    console.warn(JSON.stringify(entry));
  } else if (level === "debug") {
    console.debug(JSON.stringify(entry));
  } else {
    console.log(JSON.stringify(entry));
  }
};

export const logger = {
  info: (msg: string, meta?: Record<string, unknown>) => log("info", msg, meta),
  error: (msg: string, meta?: Record<string, unknown>) =>
    log("error", msg, meta),
  warn: (msg: string, meta?: Record<string, unknown>) => log("warn", msg, meta),
  debug: (msg: string, meta?: Record<string, unknown>) =>
    log("debug", msg, meta),
};
