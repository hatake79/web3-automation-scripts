const logger = require("../utils/logger");
const { getTokenPrice } = require("../price-monitor/tokenPriceMonitor");
const { checkRPC } = require("../rpc-tools/rpcHealthChecker");
const { getGasPrice } = require("../gas-tools/gasTracker");

async function run() {

  logger.info("Running Web3 Automation Scripts");

  const price = await getTokenPrice("ethereum");
  logger.info(`ETH price: $${price}`);

  const rpc = await checkRPC();
  logger.info(`RPC latest block: ${rpc.latestBlock}`);

  const gas = await getGasPrice();
  logger.info(`Gas price: ${gas.gasPrice}`);

}

run();
