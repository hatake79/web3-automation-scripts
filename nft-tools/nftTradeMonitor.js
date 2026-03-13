const provider = require("../utils/provider");

async function monitorNFTTrades(blockNumber) {

  const block = await provider.getBlockWithTransactions(blockNumber);

  const nftTrades = [];

  for (const tx of block.transactions) {

    if (tx.data && tx.data.length > 100) {

      nftTrades.push({
        hash: tx.hash,
        from: tx.from,
        to: tx.to
      });

    }

  }

  return nftTrades;

}

module.exports = { monitorNFTTrades };
