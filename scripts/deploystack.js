// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { ethers } = require("hardhat");
async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unstackingTime = currentTimestampInSeconds + 60;

  const stackingedAmount = hre.ethers.parseEther("0.001");

  const stacking = await hre.ethers.deployContract("Stacking", [unstackingTime], {
    value: stackingedAmount,
  });

  await stacking.waitForDeployment();

  console.log(
    `stacking with ${ethers.formatEther(
      stackingedAmount
    )}ETH and unstacking timestamp ${unstackingTime} deployed to ${stacking.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});