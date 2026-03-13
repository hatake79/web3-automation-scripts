const provider = require("../utils/provider");

async function monitorBlock(blockNumber) {

  const block = await provider.getBlockWithTransactions(blockNumber);

  const swaps = [];

  for (const tx of block.transactions) {

    if (tx.value > 5n * 10n ** 18n) { // ~5 ETH

      swaps.push({
        hash: tx.hash,
        from: tx.from,
        to: tx.to,
        value: tx.value.toString()
      });

    }

  }

  return swaps;

}

module.exports = { monitorBlock };
