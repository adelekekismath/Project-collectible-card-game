const { ethers, Wallet } = require('ethers');

// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/oi_7wwwjgNWKV4u2SXm-hNFaVcolNKGy");
const wallet = new Wallet("b0fd4e9999ed8c207d827656063cf70e7a8eca14af1bff36300c53a1b7d65bd2", provider);
const contract = require("../artifacts/src/Collection.sol/Collection.json");
const contractABI = contract.abi; // Your contract's ABI
const nftContract = new ethers.Contract("0x500f3033E7d9e625c2CCd1bC1c8Eb059cF64B9A0", contractABI, wallet);

// Function to create a new NFT in a collection
async function createNFT(cardId) {
    const set = "dp1";
    const apiUrl = `https://api.pokemontcg.io/v2/cards/${set}-${cardId}`;
    const tx = await nftContract.mint(apiUrl,user);
    await tx.wait();
    console.log('NFT created:',cardId );
}
const minNumber = 1;
const maxNumber = 250;
const usedNumbers = [];
function getRandomUniqueNumber(min, max) {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (usedNumbers.includes(randomNum));

  usedNumbers.push(randomNum);
  return randomNum;
}

async function createNFTRandom(){
  for (let i = 0; i < 5; i++) {
    const randomNum = getRandomUniqueNumber(minNumber, maxNumber);
    createNFT(randomNum);
  } 
}
createNFTRandom();

