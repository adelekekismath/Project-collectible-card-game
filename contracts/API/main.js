const { ethers,Wallet, JsonProvider } = require('ethers');

// Connect to Ethereum network

const provider = new ethers.providers.StaticJsonRpcProvider({ url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`, skipFetchSetup: true, });
const wallet = new Wallet('', provider); // Note the correction in retrieving the private key from process.env

const contract = require("../artifacts/src/NFTCard.sol/NFTCard.json");
const contractABI = contract.abi; // Your contract's ABI
const nftContract = new ethers.Contract(process.env.WALLET_PRIVATE_KEY, contractABI, wallet);
//NFT CONTRAT 0xC64B37FB3E8Df85ccBeE75538C817c56BD582905
// Mint a new NFT
// async function mintNFT() {
//   const tx = await nftContract?.createCollection("First Collection",1);
//   await tx.wait(); // Wait for the transaction to be confirmed
//   console.log('NFT minted!');
// }
// mintNFT();
async function mintNFT() {
// const tx = await nftContract?.createCollection("First Collection",2);
// await tx.wait();
// console.log('NFT minted!')
// const img = 'https://peach-urban-penguin-523.mypinata.cloud/ipfs/QmTXh2YbnVHyjjkCrNDyg1bDiJudzV8nLK7jkQSfBFGxo3?_gl=1*10esndl*_ga*OTA2MjcxMDMwLjE2OTczOTAzOTk.*_ga_5RMPXG14TE*MTY5ODA4NjcxNC41LjEuMTY5ODA5MDI4NC42MC4wLjA.'; 
// const owner = "0xb5b9e3C75e451228A23aD982627aE6C1Cc342aDD"; // Remplacez par l'adresse du propriétaire
const txx = await nftContract?.mint(process.env.METADATA)
  await txx.wait(); // Wait for the transaction to be confirmed
  console.log('NFT minted!');
}
mintNFT();