const provider = require("../utils/provider");

async function parseTransaction(hash) {

  const tx = await provider.getTransaction(hash);

  return {
    from: tx.from,
    to: tx.to,
    value: tx.value.toString()
  };

}

module.exports = { parseTransaction };
