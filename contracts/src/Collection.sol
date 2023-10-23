// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "./NFTCard.sol";

contract Collection {
  string public name;
  int public cardCount;
  mapping(int =>NFTCard) private cards;
  

  constructor(string memory _name, int _cardCount) {
    name = _name;
    cardCount = _cardCount;
  }

  function addCard(int number,string memory img, address owner ) public{
    cards[cardCount] = new NFTCard(number,img, owner);
  }

}
