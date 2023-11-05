<template>
  <div class="page-container">
    <!-- Collections Section -->
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
          <button @click="fetchCollectionNfts({ setId: collection.setId })">Details</button>
        </li>
      </ul>
    </div>

    <!-- Collection Details Section -->
    <div class="section collection-details-section">
  <h1>Collection Details</h1>
  <div class="collection-details-cards">
    <!-- Utilisation de v-for pour afficher les données dans des cartes -->
    <div v-for="(detail, index) in collectionDetails" :key="index" class="collection-detail-card">
      <div class="card-content">
        <p class="detail-tokenId">Token ID: {{ detail.tokenId }}</p>
        <p class="detail-Url">URL: {{ detail.Url }}</p>
        <p class="detail-Name">Name: {{ detail.name }}</p>
        <img class="detail-Image" :src="detail.image" alt="NFT Image" />
        <p class="detail-Types">Types: {{ detail.types }}</p>
        <p class="detail-Level">Level: {{ detail.level }}</p>
        <p class="detail-Attacks">Attacks: {{ detail.attacks }}</p>
        <p class="detail-Weaknesses">Weaknesses: {{ detail.weaknesses }}</p>
        <p class="detail-RetreatCost">Retreat Cost: {{ detail.retreatCost }}</p>
        <p class="detail-Set">Set: {{ detail.set }}</p>
      </div>
    </div>
  </div>
</div>


    <!-- MetaMask Section (Your existing code) -->
    <div class="section metamask-section">
      <h1>Interacting with MetaMask in Vue.js</h1>
      <button @click="connectMetaMask" class="action-button">Connect to MetaMask</button>
      <div v-if="isConnected" class="user-info">
        <p class="user-info-item">Ethereum Address: {{ userAddress }}</p>
        <p class="user-info-item">Balance: {{ userBalance }} ETH</p>
      </div>
    </div>

    <!-- My NFTs Section (Your existing code) -->
    <div class="section nfts-section">
      <h1>My NFTs</h1>
      <button class="round-button" @click="decrement">{{ nfts.length }}</button>
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
import { getAllNfts, getnfts } from './../API/BlockChainContact';
import allSetsData from './../DataOffChain/allSetsData';
export default {
  data() {
    return {
      web3: null,
      nfts: [],
      userAddress: '',
      userBalance: 0,
      isConnected: false,
      collections: allSetsData,
      collectionDetails: []
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
} ,
 async fetchCollectionNfts(collectionInfo) {
  const setId = collectionInfo.setId;
  const nftsData = await getAllNfts(setId);
  this.collectionDetails = nftsData;
},

  },
};
</script>
<style scoped>
.round-button {
  width: 80px;
  height: 80px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.round-button:hover {
  background-color: #2980b9;
}
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
.collection-details-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Espace entre les cartes */
}

.collection-detail-card {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 300px; /* Largeur de chaque carte */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.card-content {
  text-align: left;
}

.detail-Image {
  max-width: 100%; /* Pour redimensionner l'image à l'intérieur de la carte */
}

</style>