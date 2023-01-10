const { task } = require("hardhat/config")

task("block-num", "Prints the current block number").setAction(
    // const blocktask =async function() => {}
    // async function blocktask (){}
    async (taskArgs, hre) => {
        const blocknum = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number is ${blocknum}`)
    }
)

module.exports = {}
