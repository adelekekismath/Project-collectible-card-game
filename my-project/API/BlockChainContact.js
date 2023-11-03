const Web3 = require('web3');
const web3 = new Web3('https://eth-sepolia.g.alchemy.com/v2/oi_7wwwjgNWKV4u2SXm-hNFaVcolNKGy');
const contract = require("../../contracts/artifacts/src/Collection.sol/Collection.json");
const contractABI = contract.abi; // Your contract's ABI
const nftContract = new web3.eth.Contract(contractABI, '0x500f3033E7d9e625c2CCd1bC1c8Eb059cF64B9A0');
// const User = "0xb5b9e3C75e451228A23aD982627aE6C1Cc342aDD";
export async function  getNFTs(User) {
    const userBalance = await web3.eth.getBalance(User);
    const nftBalance = await nftContract.methods.balanceOf(User).call();
    const nftData = [];

    for (let i = 0; i < nftBalance; i++) {
      const tokenId = await nftContract.methods.getCardMetadata(i).call();
      const tokenUrl = await nftContract.methods.tokenURI(i).call();
      const response = await fetch(tokenUrl);
      if (response.ok) {
        const data = await response.json();
        nftData.push({
          tokenId,
          data,
        });
      }
    }
    return {
      userBalance,
      nftBalance,
      nftData,
    };
}

export async function  TransferPokemon(to,tokenId) {
  await nftContract.methods.transferCard(to,tokenId).call();
}



// async function getnfts(User){
//   web3.eth.getBalance(User)
//   // Utilisez la méthode "balanceOf" pour obtenir le nombre de NFTs détenus par le compte.
//   nftContract.methods.balanceOf(User).call()
//     .then(async (balance) => {
//       console.log(`Balance of NFTs for ${User}: ${balance} NFTs`);
//       // Utilisez une boucle pour itérer sur chaque NFT et obtenir des détails supplémentaires si nécessaire.
//       for (let i = 0; i < balance; i++) {
//         const tokenId = await nftContract.methods.getCardMetadata(i).call();
//         console.log(`NFT ${i + 1}: Token ID ${tokenId}`);
//         // Vous pouvez également interroger d'autres informations sur chaque NFT si le contrat le permet.
//         const tokenUrl = await nftContract.methods.tokenURI(i).call();
//         console.log(`NFT ${i + 1}: Token ID ${tokenUrl}`);
//         fetch(tokenUrl)
//   .then(response => response.json())
//   .then(data => { // Les données JSON récupérées
//     // Utilisez les données comme nécessaire
//     const name = data.data.name;
//     const image =  data.data.images.large;
//     const type =  data.data.types;
//     const id = data.data.id; 
//     const level = data.data.level; 
//     const hp = data.data.hp; 
//     const attacks = data.data.attacks; 
//     const weaknesses = data.data.weaknesses; 
//     const retreatCost = data.data.retreatCost; 
//     const set = data.data.set; 
//     console.log('Name:', name);
//     console.log('Image:', image);
//     console.log('Type:', type);
//     console.log('ID:', id);
//     console.log('Level:', level);
//     console.log('HP:', hp);
//     console.log('Attacks:', attacks);
//     console.log('Weaknesses:', weaknesses);
//     console.log('Retreat Cost:', retreatCost);
//     console.log('Set:', set);
//   })
//   .catch(error => {
//     console.error('Error fetching data from token URL:', error);
//   });
//       }
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });

// }

  
  
  
  
  
  