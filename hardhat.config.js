require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block_number")
/** @type import('hardhat/config').HardhatUserConfig */

const Goerli_RPC_URL = process.env.Goerli_RPC_URL
const PRIVATE_key = process.env.PRIVATE_key
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: Goerli_RPC_URL,
            accounts: [PRIVATE_key],
            chainId: 5,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
    },
    etherscan: { apiKey: ETHERSCAN_API_KEY },
    solidity: "0.8.17",
}
