//import
const { ethers, run, network } = require("hardhat")

//async function
async function main() {
    const Simplestoragefactory = await ethers.getContractFactory(
        "SimpleStorage" //name of the contract and not the file
    )
    console.log("Deploying...")
    const Simplestorage = await Simplestoragefactory.deploy()
    await Simplestorage.deployed()
    console.log(`Deployed contract to address ${Simplestorage.address}`)

    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        await Simplestorage.deployTransaction.wait(6)
        await verify(Simplestorage.address, [])
    }
    const currentvalue = await Simplestorage.retrieve()
    console.log(currentvalue)
    const transation = await Simplestorage.store(7)
    await transation.wait(1)
    const Upvalue = await Simplestorage.retrieve()
    console.log(Upvalue)
}

async function verify(contractAdd, Args) {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAdd,
            constructorArguments: Args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified")
        } else {
            console.log(e)
        }
    }
}

//main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
