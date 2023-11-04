const Web3 = require('web3');
const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/oi_7wwwjgNWKV4u2SXm-hNFaVcolNKGy');
const contract = require("../../contracts/artifacts/src/Collection.sol/Collection.json");
const contractABI = contract.abi; // Your contract's ABI
const nftContract = new web3.eth.Contract(contractABI, '0x52f0DA756e586028Ea76f8e7F76d18814fF121A5');
const axios = require('axios'); // Import the 'axios' module

export async function getAllNfts(set) {
  const nftBalance = await nftContract.methods.balance().call();
  console.log(nftBalance);
  const getAllNfts = await nftContract.methods.getAllNfts().call();
  for (let i = 0; i < getAllNfts.length; i++) {
    console.log(getAllNfts[i]);
    const match = getAllNfts[i].match(new RegExp(set + "-"));
    if(match)
    {
      const tokenId = await nftContract.methods.getCardMetadata(i).call();
      console.log(tokenId);
    }
  }
}

export async function getnfts(User) {
  const balance = await nftContract.methods.balanceOf(User).call();
  const nfts = [];

  for (let i = 0; i < balance; i++) {
    const tokenUrl = await nftContract.methods.tokenURI(i).call();
    const response = await axios.get(tokenUrl);
    const data = response.data.data[0];

    const nftInfo = {
      name: data.name,
      image: data.images.large,
      types: data.types,
      id: data.id,
      level: data.level,
      hp: data.hp,
      attacks: data.attacks,
      weaknesses: data.weaknesses,
      retreatCost: data.retreatCost,
      set: data.set,
    };

    nfts.push(nftInfo);
  }
  return nfts; 
}

  
  
  
  
  