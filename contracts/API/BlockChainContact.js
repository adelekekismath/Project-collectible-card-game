// // const {Web3} = require('web3')
// // var provider = "https://eth-sepolia.g.alchemy.com/v2/oi_7wwwjgNWKV4u2SXm-hNFaVcolNKGy";
// // var web3Provider = new Web3.providers.HttpProvider(provider);
// // var web3 = new Web3(web3Provider);
// // web3.eth.getBlockNumber().then((result) => {
// //     console.log("Latest Ethereum Block is ",result);
// //   });
// const Web3 = require('web3');
// const provider = "https://eth-sepolia.g.alchemy.com/v2/oi_7wwwjgNWKV4u2SXm-hNFaVcolNKGy";
//  var web3Provider = new Web3.providers.HttpProvider(provider);
// var web3 = new Web3(web3Provider);

// const contractAddress = "0x9AfeA2bEaC9d3b46C5d2DAa034934d49D7a9b42b"; // Remplacez par l'adresse de votre contrat intelligent
// const contract = require("../artifacts/src/Collection.sol/Collection.json");
// const contractABI = contract.abi;
// const contractCollection = new web3.eth.Contract(contractABI, contractAddress);
// contractCollection.methods.getAllCards().call((err, result) => {
//   if (!err) {
//     console.log('Toutes les données:', result);
//     // Mettez à jour l'interface utilisateur pour afficher les données
//   } else {
//     console.error('Erreur de lecture des données:', err);
//   }
// });
const { ethers } = require('ethers');

const provider = new ethers.providers.StaticJsonRpcProvider({ url:'http://localhost:8545'});
const wallet = new ethers.Wallet('ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', provider);

// Load your NFT smart contract (replace with your contract address and ABI)
const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
const contract = require("../artifacts/src/NFTCard.sol/NFTCard.json");
const contractABI = contract.abi; // Your contract's ABI
const nftContract = new ethers.Contract(contractAddress, contractABI, wallet);

// Mint a new NFT
async function mintNFT(metadataURI) {
  const tx = await nftContract.mint(metadataURI);
  await tx.wait(); // Wait for the transaction to be confirmed
  console.log('NFT minted!');
}

// Call the mint function
mintNFT('https://ipfs.io/ipfs/QmbBWykUR7xW5EALfrpPxhxUkde9pjawKYzCZboaatSDUq');