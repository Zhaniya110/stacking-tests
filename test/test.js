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

describe("MyTest", function(){
    async function runEveryTime(){
        const ONE_YEAR_IN_SECONDS = 356 * 24 * 60 * 60;
        const ONE_GEWI = 100000000;
        const lockedAmount = ONE_GEWI;
        const unlockedTime = (await time.latest()) + ONE_YEAR_IN_SECONDS;
        console.log(ONE_YEAR_IN_SECONDS,ONE_GEWI)
    }
    runEveryTime()
})