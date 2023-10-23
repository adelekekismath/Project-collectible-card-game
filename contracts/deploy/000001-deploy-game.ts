/* eslint-disable @typescript-eslint/no-unused-vars */
import { ethers } from "hardhat";

async function main() {
  // const contract = await ethers.deployContract("Main");
  // await contract.deployed();
  // console.log("Se deployed to SEPOLIA", contract.address);
  //Se deployed to SEPOLIA 0x2f4d5Ef6C6dcA8eB102b30E41e5403fF6fd49CA0
  const contract = await ethers.deployContract("NFTCard");
  await contract.deployed();
  console.log("NFT deployed to SEPOLIA", contract.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});







