const { ethers, Wallet } = require('ethers');
// Connect to Ethereum network
const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/oi_7wwwjgNWKV4u2SXm-hNFaVcolNKGy");
const wallet = new Wallet("b0fd4e9999ed8c207d827656063cf70e7a8eca14af1bff36300c53a1b7d65bd2", provider);
const contract = require("../../contracts/artifacts/src/Collection.sol/Collection.json");
const contractABI = contract.abi; // Your contract's ABI
const nftContract = new ethers.Contract("0x8615D14CcaAc749fC485E098E0CBb1473A6E328F", contractABI, wallet);
const fs = require('fs');
const pathSets = "../DataOffChain/allSetsData.json";
const pathAccounts = "../DataOffChain/accounts.json";

function createNFTRandom(UserAdress){
  const { randomSetId, maxNumber } = getRandomSetIdFromJson();
  const __randomNum = getRandomUniqueNumber(minNumber, maxNumber);
  console.log(randomSetId,maxNumber);
   createNFT(__randomNum,randomSetId,UserAdress);
}

async function createNFT(cardId,set,UserAdress) {
    const apiUrl = `https://api.pokemontcg.io/v2/cards?q=id:${set}-${cardId}`
    console.log(apiUrl);
    const tx = await nftContract.mint(apiUrl,UserAdress);
    await tx.wait();
    console.log('NFT created:',cardId );
}
const minNumber = 1;
const usedNumbers = [];
function getRandomUniqueNumber(min, max) {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (usedNumbers.includes(randomNum));

  usedNumbers.push(randomNum);
  return randomNum;
}

function getRandomSetIdFromJson() {
  const jsonData = fs.readFileSync(pathSets);
  const setsData = JSON.parse(jsonData);
  const randomIndex = Math.floor(Math.random() * setsData.length);
  const randomSetId = setsData[randomIndex].setId;
  const maxNumber = setsData[randomIndex].cardCount ;
  return { randomSetId ,maxNumber};
}
export function CheckExistenceUserAccount(user) {
  try {
    if (!fs.existsSync(pathAccounts)) {
      const initialData = { accounts: [] };
      const initialDataJSON = JSON.stringify(initialData, null, 2);
      fs.writeFileSync(pathAccounts, initialDataJSON);
    }

    const jsonData = fs.readFileSync(pathAccounts);
    const data = JSON.parse(jsonData);
    const totalDataCount = data.length;
    console.log("data: ", data);
    const name = `User${totalDataCount}`;
    console.log(name);
    if (data.accounts && data.accounts.some((account) => account.userAddress === user)) {
      return true;
    } else {
      const newAccount = {
        userAddress: user,
        userName: name,
        haveBooster: 0,
      };
      console.log("ACCOUNT: ", newAccount);

      data.push(newAccount); // Ajoutez le nouvel utilisateur au tableau existant

      createNFTRandom(user);
      const updatedData = JSON.stringify(data, null, 2);
      fs.writeFileSync(pathAccounts, updatedData);
      return true;
    }
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    return false;
  }
}


