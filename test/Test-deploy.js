const { getContractFactory } = require("@nomiclabs/hardhat-ethers/types")
const { ehters } = require("hardhat")
const { assert, expect } = require("chai")

describe("Simplestorage", function () {
    let Simplestoragefactory, simplestorage
    beforeEach(async function () {
        Simplestoragefactory = await ethers.getContractFactory("SimpleStorage")
        simplestorage = await Simplestoragefactory.deploy()
    })

    it("Should start with a favourite numer of 0", async function () {
        const currentValue = await simplestorage.retrieve()
        const expectedvalue = "0"

        assert.equal(currentValue.toString(), expectedvalue)
    })
    it("Should change the value to 23", async function () {
        const change = await simplestorage.store("23")
        const currentValue = await simplestorage.retrieve()
        const expectedvalue = "23"

        assert.equal(currentValue.toString(), expectedvalue)
    })
})
