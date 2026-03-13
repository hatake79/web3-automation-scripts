const provider = require("../utils/provider");

async function trackVolume(blockNumber) {

  const block = await provider.getBlockWithTransactions(blockNumber);

  let volume = 0n;

  for (const tx of block.transactions) {
    volume += tx.value;
  }

  return {
    block: blockNumber,
    volume: volume.toString()
  };

}

module.exports = { trackVolume };
