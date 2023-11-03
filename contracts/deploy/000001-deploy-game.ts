/* eslint-disable @typescript-eslint/no-unused-vars */
import { ethers } from "hardhat";

async function main() {
  // const contract = await ethers.deployContract("Main");
  // await contract.deployed();
  // console.log("Se deployed to SEPOLIA", contract.address);
  //Se deployed to SEPOLIA 0x2f4d5Ef6C6dcA8eB102b30E41e5403fF6fd49CA0
  const contract = await ethers.getContractFactory("Collection");
  const contractCollection = await contract.deploy("CollectionPokemon","SET1");
  await contractCollection.deployed();
  console.log("Collection deployed to SEPOLIA", contractCollection.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// import 'dotenv/config';
// import { DeployFunction } from 'hardhat-deploy/types';

// const deploy: DeployFunction = async hre => {
//   if (hre.network.config.chainId !== 31337) return;
//   const { deployer: deployerAddress } = await hre.getNamedAccounts();
//   await hre.deployments.deploy('Collection', { from: deployerAddress, log: true });
//   console.log('deployed ',deployerAddress)
// };

// export default deploy;






