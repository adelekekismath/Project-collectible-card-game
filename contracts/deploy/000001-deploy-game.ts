// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { ethers } from "hardhat";

// async function main() {
//   // const contract = await ethers.deployContract("Main");
//   // await contract.deployed();
//   // console.log("Se deployed to SEPOLIA", contract.address);
//   //Se deployed to SEPOLIA 0x2f4d5Ef6C6dcA8eB102b30E41e5403fF6fd49CA0
//   const contract = await ethers.deployContract("NFTCard");
//   await contract.deployed();
//   console.log("NFT deployed to SEPOLIA", contract.address);
// }


// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
import 'dotenv/config'
import { DeployFunction } from 'hardhat-deploy/types'

const deployer: DeployFunction = async hre => {
  if (hre.network.config.chainId !== 31337) return
  const { deployer } = await hre.getNamedAccounts()
  await hre.deployments.deploy('NFTCard', { from: deployer, log: true })
}

export default deployer





