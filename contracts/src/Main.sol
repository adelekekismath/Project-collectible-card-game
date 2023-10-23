// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Collection.sol";
import "./NFTCard.sol";

contract Main {
  int private count;
  mapping(int =>Collection) private collections;
  address private superAdmin;

  constructor() {
    count = 0;
    superAdmin = msg.sender;
  }

  function createCollection(string calldata name, int cardCount) external {
    collections[count++] = new Collection(name, cardCount);
  }

  function createNFT(int numero, string calldata  img, int collectionId,address owner) external{
    collections[collectionId].addCard(numero, img, owner);
  }

  function getAllCollection() external view returns (Collection[] memory )  {
    Collection[] memory allCollections = new Collection[](uint256(count)); 

    for (int i = 0; i < count; i++) {
        allCollections[uint256(i)] = collections[i];
    }
    return allCollections;
  }

  function getOneCollection(int collectionId) external view returns (Collection ){
    return collections[collectionId];
  }

  function getACollectionCards(int collectionId) external view returns (NFTCard[] memory){
    return collections[collectionId].getAllCards();
  }

 function getUserCards(address owner) external view returns (NFTCard[] memory) {
    NFTCard[] memory allCards;
    uint256 cardCount = 0;

    for (int i = 0; i < count; i++) {
        NFTCard[] memory collectionCards = collections[i].getAllCards();
        for (uint256 j = 0; j < collectionCards.length; j++) {
            if (collectionCards[j].getOwner() == owner) {
                NFTCard[] memory newCards = new NFTCard[](cardCount + 1);
                for (uint256 k = 0; k < cardCount; k++) {
                    newCards[k] = allCards[k];
                }
                newCards[cardCount] = collectionCards[j];
                allCards = newCards;
                cardCount++;
            }
        }
    }
    return allCards;
  }

}
