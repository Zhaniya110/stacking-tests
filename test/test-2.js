const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
// console.log(time);
// console.log(loadFixture);   




const {anyValue} = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const {expect} = require("chai");
const {ethers} = require("hardhat");
// console.log(anyValue); 
// console.log(ethers); 

describe("Stacking contract", function () {
    it("Deployment should assign the total supply of Stackings to the owner", async function () {
      const [owner] = await ethers.getSigners();
  
      const hardhatStacking = await ethers.deployContract("Stacking");
  
      const ownerBalance = await hardhatStacking.balanceOf(owner.address);
      expect(await hardhatStacking.totalSupply()).to.equal(ownerBalance);
    });
  });