// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "./NFTCard.sol";

contract Collection {
  string public name;
  int public cardCount;
  NFTCard[] public cards;

  constructor(string memory _name, int _cardCount) {
    name = _name;
    cardCount = _cardCount;
  }

  function addCard(int number,string memory img,uint256 tokenCount, uint256 tokenURI) public{
  }

}
