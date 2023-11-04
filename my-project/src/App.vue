<template>
  <div class="page-container">
    <div class="section collections-section">
      <h1>Collections</h1>
      <ul class="collection-list">
        <li v-for="(collection, index) in collections" :key="index" class="collection-item">
          <h2 class="collection-title">Set ID: {{ collection.setId }}</h2>
          <p class="collection-name">Set Name: {{ collection.setName }}</p>
          <a :href="collection.setImage" target="_blank">
            <img :src="collection.setImage" alt="Set Image" class="collection-image">
          </a>
          <p class="collection-count">Card Count: {{ collection.cardCount }}</p>
        </li>
      </ul>
    </div>
    <div class="metamask-section">
      <h1>Interacting with MetaMask in Vue.js</h1>
      <button @click="connectMetaMask" class="action-button">Connect to MetaMask</button>
      <div v-if="isConnected" class="user-info">
        <p class="user-info-item">Ethereum Address: {{ userAddress }}</p>
        <p class="user-info-item">Balance: {{ userBalance }} ETH</p>
      </div>
    </div>
    <div class="nfts-section">
      <h1>My NFTs</h1>
      <button @click="fetchNFTs" class="action-button">Fetch NFTs</button>
      <div v-if="isConnected && nfts.length > 0" class="nft-list">
        <ul>
          <li v-for="(nft, index) in nfts" :key="index" class="nft-item">
            <p class="nft-name">Name: {{ nft.name }}</p>
            <img :src="nft.image" alt="NFT Image" class="nft-image">
            <p class="nft-id">Token ID: {{ nft.id }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>




<script>
import Web3 from 'web3';
import { getnfts } from './../API/BlockChainContact';
import allSetsData from './../DataOffChain/allSetsData';
export default {
  data() {
    return {
      web3: null,
      nfts: [],
      userAddress: '',
      userBalance: 0,
      isConnected: false,
      collections: allSetsData
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
        const nftsData = await getnfts(this.userAddress);
        this.nfts = nftsData;
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      }
}

  },
};
</script>
<style scoped>
.collection-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.collection-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 200px;
  text-align: center;
}

.collection-title {
  font-size: 1.2em;
  margin: 0;
}

.collection-name {
  font-weight: bold;
}

.collection-image {
  max-width: 100%;
  height: auto;
}

.collection-count {
  margin: 0;
}
</style>