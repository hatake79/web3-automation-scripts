const provider = require("../utils/provider");

async function trackWallet(wallet) {

  const balance = await provider.getBalance(wallet);

  return {
    wallet,
    balance: balance.toString()
  };

}

module.exports = { trackWallet };
