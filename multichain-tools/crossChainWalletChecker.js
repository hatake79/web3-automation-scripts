const { ethers } = require("ethers");

const chains = {
  ethereum: "https://eth.llamarpc.com",
  polygon: "https://polygon.llamarpc.com"
};

async function checkWallet(wallet) {

  const results = {};

  for (const chain in chains) {

    const provider = new ethers.JsonRpcProvider(chains[chain]);

    const balance = await provider.getBalance(wallet);

    results[chain] = balance.toString();

  }

  return results;

}

module.exports = { checkWallet };
