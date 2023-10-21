import 'dotenv/config'
import { DeployFunction } from 'hardhat-deploy/types'

const Web3 = require('web3')
const rpcURL = "https://mainnet.infura.io/YOUR_INFURA_API_KEY"


const deployer: DeployFunction = async hre => {
  if (hre.network.config.chainId !== 31337) return
  const { deployer } = await hre.getNamedAccounts()
  await hre.deployments.deploy('Main', { from: deployer, log: true })
}

export default deployer
