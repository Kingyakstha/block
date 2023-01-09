//import
const { ethers } = require("hardhat")

//async function
async function main() {
    const Simplestoragefactory = await ethers.getContractFactory(
        "SimpleStorage" //name of the contract and not the file
    )
    console.log("Deploying...")
    const Simplestorage = await Simplestoragefactory.deploy()
    await Simplestorage.deployed()
    console.log(`Deployed contract to address ${Simplestorage.address}`)
}

//main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
