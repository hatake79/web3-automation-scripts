const axios = require("axios");

async function getTokenPrice(tokenId) {

  const url =
    `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`;

  const res = await axios.get(url);

  return res.data[tokenId].usd;

}

module.exports = { getTokenPrice };
