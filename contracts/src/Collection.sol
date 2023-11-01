// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Collection is ERC721Enumerable, Ownable {
    string public collectionName;
    uint256 public cardCount;
    uint256 public nextTokenId;

    mapping(uint256 => string) private cardMetadata; // Mapping pour stocker les métadonnées des NFT

    constructor() ERC721("CollectionName", "COLL") Ownable(msg.sender) {
        nextTokenId = 1;
    }

    function addCard(string memory metadata, address user) external onlyOwner {
        // require(cardCount < maxCards, "La collection est pleine");

        uint256 tokenId = nextTokenId;
        cardMetadata[tokenId] = metadata;
        _mint(user, tokenId);
        cardCount++;
        nextTokenId++;

        // Émettez l'événement pour enregistrer l'ajout de la carte
        emit CardAdded(tokenId, metadata);
    }

    function getCardMetadata(uint256 tokenId) external view returns (string memory) {
        return cardMetadata[tokenId];
    }

    function transferCard(address to, uint256 tokenId) external {
      require(isApprovedOrOwner(msg.sender, tokenId), "Vous ne pouvez transferer que vos propres cartes");
      safeTransferFrom(msg.sender, to, tokenId);
    }

    function isApprovedOrOwner(address spender, uint256 tokenId) internal view returns (bool) {
        address owner = ownerOf(tokenId);
        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));
    }

    event CardAdded(uint256 tokenId, string metadata);
}