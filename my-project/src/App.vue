<template>
  <div>
    <h1>Interacting with MetaMask in Vue.js</h1>
    <button @click="connectMetaMask">Connect to MetaMask</button>
    <div v-if="isConnected">
      <p>Ethereum Address: {{ userAddress }}</p>
      <p>Balance: {{ userBalance }} ETH</p>
    </div>
    <h1>My NFTs</h1>
    <button @click="fetchNFTs">Fetch NFTs</button>
    <div v-if="isConnected && nfts.length > 0">
      <ul>
        <li v-for="(nft, index) in nfts" :key="index">
          <p>Name: {{ nft.data.name }}</p>
          <img :src="nft.data.image" alt="NFT Image">
          <p>Token ID: {{ nft.data.id }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3';
import { getNFTs } from './../API/BlockChainContact';
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

    async fetchNFTs() {
      try {
        const nftData = await getNFTs(this.userAddress);
        this.nfts = nftData.nftData;
        console.log(this.nfts);
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      }
    },
  },
};
</script>
