const axios = require("axios");

async function getTokenHolders(contract) {

  const url =
  `https://api.etherscan.io/api?module=token&action=tokenholderlist&contractaddress=${contract}`;

  const res = await axios.get(url);

  return res.data.result;

}

module.exports = { getTokenHolders };
