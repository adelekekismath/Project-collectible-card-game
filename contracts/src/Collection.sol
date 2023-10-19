// SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;
import "./NFTCard.sol";

contract Collection {
  string public name;
  int public cardCount;
  NFTCard[] public cards;

  constructor(string memory _name, int _cardCount) {
    name = _name;
    cardCount = _cardCount;
  }

  function addCard(int number,string img,uint256 tokenCount, uint256 tokenURI) public{
    if (cardCount > cards.length) {
      collections.push(new NFTCard(number, img,tokenCount , tokenURI));
    } else
        revert("Impossible to add card");
  }

  function getCard(uint256 tokenURI) public view returns (uint256, string memory) {
      Card memory card = cards[tokenId];
      for (var i = 0; i < cards.length; i++) {
        if (cards[i].tokenURI == tokenURI) {
          return cards[i]
        }
        else
          return 0;
      }

  }

}
