<template>
   
  <div>
    <h1>Interacting with MetaMask in Vue.js</h1>
    <button @click="connectMetaMask">Connect to MetaMask</button>
    <div v-if="isConnected">
      <p>Ethereum Address: {{ userAddress }}</p>
      <p>Balance: {{ userBalance }} ETH</p>
    </div>
    <h1>My NFTs</h1>
    <button @click="getNFTs">Fetch NFTs</button>
    <div v-if="isConnected && nfts.length > 0">
      <ul>
        <li v-for="(nft, index) in nfts" :key="index">
          <p>{{ nft.name }}</p>
          <p>Token ID: {{ nft.tokenId }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3';

export default {
  data() {
    return {
      web3: null,
      nfts: [],
      userAddress: '',
      userBalance: 0,
      isConnected: false,
    };
  },
  methods: {
    async connectMetaMask() {
      if (typeof window.ethereum !== 'undefined') {
        this.web3 = new Web3(window.ethereum);

        try {
          await window.ethereum.enable();
          this.isConnected = true;

          const accounts = await this.web3.eth.getAccounts();
          this.userAddress = accounts[0];
          this.userBalance = this.web3.utils.fromWei(await this.web3.eth.getBalance(this.userAddress), 'ether');
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error('MetaMask is not installed. Please install and try again.');
      }
    },
    async getNFTs() {
      if (typeof window.ethereum !== 'undefined') {
        this.web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          const accounts = await this.web3.eth.getAccounts();
          const userAddress = accounts[0];

          const contractAddress = "0x9AfeA2bEaC9d3b46C5d2DAa034934d49D7a9b42";
          const _contract = require("../artifacts/src/Collection.sol/Collection.json");
          const contractABI = _contract.abi;

          const contract = new this.web3.eth.Contract(contractABI, contractAddress);

          const tokensOwned = await contract.methods.balanceOf(userAddress).call();
          const nfts = [];

          for (let i = 0; i < tokensOwned; i++) {
            const tokenId = await contract.methods.tokenOfOwnerByIndex(userAddress, i).call();
            const tokenData = await contract.methods.getTokenData(tokenId).call(); // Replace with your contract's token data retrieval method
            nfts.push({
              tokenId,
              name: tokenData.name,
              // Add more properties as needed
            });
          }

          this.nfts = nfts;
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error('MetaMask is not installed. Please install and try again.');
      }
    },
  },
};
</script>
