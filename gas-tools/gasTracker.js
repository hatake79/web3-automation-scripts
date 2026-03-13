const provider = require("../utils/provider");

async function getGasPrice() {

  const fee = await provider.getFeeData();

  return {
    gasPrice: fee.gasPrice.toString()
  };

}

module.exports = { getGasPrice };
