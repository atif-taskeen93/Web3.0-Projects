require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/9ypPIMolMUQTWnvDq9eDptbvARsI7Zv3",
      accounts: ["404e01373ee1aa7253989aeefc7851a8fdd425e449b196dd5333cab097cc6309"],
    }
  }
};