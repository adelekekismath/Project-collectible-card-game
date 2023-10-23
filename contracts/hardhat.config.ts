
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'dotenv/config';
import 'hardhat-abi-exporter';
import 'hardhat-deploy';
import 'hardhat-gas-reporter';

const { API_KEY_ETHER, SEPOLIA_PRIVATE_KEY, ALCHEMY_API_KEY } = process.env;

// Assurer que les variables d'environnement requises sont définies
if (!ALCHEMY_API_KEY || !API_KEY_ETHER || !SEPOLIA_PRIVATE_KEY) {
  throw new Error('One or more required environment variables are missing.');
}
// module.exports = {
//   solidity: '0.8.20',
//   defaultNetwork:"sepolia",
//   networks: {
//      hardhat: {},
//      sepolia: {
//       url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
//       accounts: [SEPOLIA_PRIVATE_KEY],
//       gas: 210000000,
//       gasPrice: 800000000000,
//     },
// }
// }
import { HardhatUserConfig } from "hardhat/config";
const config: HardhatUserConfig = {
  solidity: '0.8.20',
  defaultNetwork:"sepolia",
  paths: {
    deploy: './deploy',
    sources: './src',
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
      gas: 210000000,
      gasPrice: 1500000256,
    },
  },
  namedAccounts: {
    deployer: { default: 0 },
    admin: { default: 0 },
    second: { default: 1 },
    random: { default: 8 },
  },
  abiExporter: {
    runOnCompile: true,
    path: '../frontend/src/abis',
    clear: true,
    flat: true,
    only: [],
    pretty: true,
  },
  typechain: {
    outDir: '../typechain',
  },
};

export default config;
