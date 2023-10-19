// SPDX-License-Identifier: MIT
pragma solidity ^0.8;
import "./NFTCard.sol";

contract Collection {
  string public name;
  int public cardCount;
  NFTCard[] public cards;

  constructor(string memory _name, int _cardCount) {
    name = _name;
    cardCount = _cardCount;
  }

  function addCard(int number,string img) public{
    if (cardCount > cards.length) {
      collections.push(new NFTCard(number, img));
    } else
        revert("Impossible to add card");
  }

  function getCard(uint256 tokenId) public view returns (uint256, string memory) {
      require(_exists(tokenId), "NFT does not exist");
      Card memory card = cards[tokenId];
      return (card.number, card.img);
  }

}
