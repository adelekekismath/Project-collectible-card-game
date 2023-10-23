// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Collection.sol";

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

  // function getAllCollection() external returns (Collection[] )  {
  //   Collection[] collections  = new Collection[](count); 

  //   for (int i = 0; i < collectionCount(); i++) {
  //       names[uint(i)] = collections[i].name;
  //   }

  //   return names;
  // }


}
