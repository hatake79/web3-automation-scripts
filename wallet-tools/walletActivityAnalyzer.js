const provider = require("../utils/provider");

async function analyzeWallet(wallet) {

  const history = await provider.getHistory(wallet);

  let totalValue = 0n;

  for (const tx of history) {
    totalValue += tx.value;
  }

  return {
    wallet,
    transactions: history.length,
    totalTransferred: totalValue.toString()
  };

}

module.exports = { analyzeWallet };
