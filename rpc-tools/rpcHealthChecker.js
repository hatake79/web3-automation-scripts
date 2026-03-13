const provider = require("../utils/provider");

async function checkRPC() {

  const block = await provider.getBlockNumber();

  return {
    status: "ok",
    latestBlock: block
  };

}

module.exports = { checkRPC };
