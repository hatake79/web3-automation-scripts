function log(level, message) {
  console.log(`[${level}] ${new Date().toISOString()} ${message}`);
}

module.exports = {
  info: (msg) => log("INFO", msg),
  warn: (msg) => log("WARN", msg),
  error: (msg) => log("ERROR", msg)
};
