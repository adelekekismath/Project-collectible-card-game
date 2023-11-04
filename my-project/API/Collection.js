const { ethers, Wallet } = require('ethers');
// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/oi_7wwwjgNWKV4u2SXm-hNFaVcolNKGy");
const wallet = new Wallet("b0fd4e9999ed8c207d827656063cf70e7a8eca14af1bff36300c53a1b7d65bd2", provider);
const contract =require("../../contracts/artifacts/src/Collection.sol/Collection.json");
const contractABI = contract.abi; // Your contract's ABI
const nftContract = new ethers.Contract("0x52f0DA756e586028Ea76f8e7F76d18814fF121A5", contractABI, wallet);
const user ="0xb5b9e3C75e451228A23aD982627aE6C1Cc342aDD";
// Function to create a new NFT in a collection
async function createNFT(cardId) {
    const set = "dp4";
    const apiUrl = `https://api.pokemontcg.io/v2/cards?q=id:dp4-${cardId}`;
    const tx = await nftContract.mint(apiUrl,user);
    await tx.wait();
    console.log('NFT created:',cardId );
}
const minNumber = 1;
const maxNumber = 50;
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
    const __randomNum = getRandomUniqueNumber(minNumber, maxNumber);
    createNFT(__randomNum);
}
createNFTRandom();

