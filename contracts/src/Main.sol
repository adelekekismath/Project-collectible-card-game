// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./Collection.sol";

contract Main {
  int private count;
  mapping(int => Collection) private collections;
  address private superAdmin;

  constructor() {
    count = 0;
    superAdmin = msg.sender;
  }

  function createCollection(string calldata name, int cardCount) external {
    collections[count++] = new Collection(name, cardCount);
  }

  function getAllCollections() external returns(mapping(int => Collection)){
    return collections;
  }
}
