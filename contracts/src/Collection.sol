// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Collection is ERC721Enumerable, Ownable {
    string public collectionName;
    uint256 public cardCount;
    uint256 public nextTokenId;

    mapping(uint256 => string) private cardMetadata; // Mapping pour stocker les métadonnées des NFT

    constructor(string memory name, uint256 distinctCardsAllowed) ERC721("CollectionName", "COLL") {
        collectionName = name;
        cardCount = distinctCardsAllowed;
        nextTokenId = 1;
    }

    function addCard(string memory metadata) external onlyOwner {
        //require(cardCount < maxCards, "La collection est pleine");

        uint256 tokenId = nextTokenId;
        cardMetadata[tokenId] = metadata;
        _mint(msg.sender, tokenId);
        cardCount++;
        nextTokenId++;

        // Émettez l'événement pour enregistrer l'ajout de la carte
        emit CardAdded(tokenId, metadata);
    }

    function getCardMetadata(uint256 tokenId) external view returns (string memory) {
        return cardMetadata[tokenId];
    }

    function transferCard(address to, uint256 tokenId) external {
      require(_isApprovedOrOwner(msg.sender, tokenId), "Vous ne pouvez transférer que vos propres cartes");
      safeTransferFrom(msg.sender, to, tokenId);
    }


    event CardAdded(uint256 tokenId, string metadata);

}
