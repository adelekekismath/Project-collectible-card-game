

const { ethers, Wallet } = require('ethers');
const axios = require('axios');

// Initialisation de votre fournisseur Ethereum et de votre portefeuille
const provider = new ethers.providers.StaticJsonRpcProvider({ url: "https://eth-sepolia.g.alchemy.com/v2/oi_7wwwjgNWKV4u2SXm-hNFaVcolNKGy", skipFetchSetup: true });
const wallet = new Wallet('b0fd4e9999ed8c207d827656063cf70e7a8eca14af1bff36300c53a1b7d65bd2', provider);

// Adresse du contrat
const contractAddress = "0x9AfeA2bEaC9d3b46C5d2DAa034934d49D7a9b42b";

// Contrat
const contract = require("../artifacts/src/Collection.sol/Collection.json");
const contractABI = contract.abi;
const nftContract = new ethers.Contract(contractAddress, contractABI, wallet);

// URL du JSON
const jsonURL = 'https://ipfs.io/ipfs/QmVJdAVG3SDpTSxCCWG2JmAzkU1HEb9gvnnZDDiszfzkR5';


async function mintNFT() {
    try {
        const response = await axios.get(jsonURL);
        const collections = response.data;

        // Envoi des collections au contrat
        const txx = await nftContract.mintcollection(collections);
        await txx.wait();
        console.log('Collections insérées dans la blockchain.');
    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
}

mintNFT();

