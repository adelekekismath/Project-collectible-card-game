// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "./Collection.sol";

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";

contract Main is Ownable, ERC721Enumerable, ERC721Pausable {
    using SafeMath for uint256;
    using Counters for Counters.Counter;
    
    Counters.Counter private _collectionIds;
    
    // Mapping to store the collection data
    mapping(uint256 => Collection) public collections;
    
    // Modifier to ensure that the caller is the owner of a collection
    modifier onlyCollectionOwner(uint256 collectionId) {
        require(collections[collectionId].owner == msg.sender, "Vous n'êtes pas le propriétaire de cette collection.");
        _;
    }

    constructor() ERC721("MainCollection", "MNC") {
    }

    // Function to create a new collection
    function createCollection(string memory name, uint256 cardCount) external returns (uint256) {
        require(cardCount > 0, "Le nombre de cartes doit être supérieur à zéro.");
        _collectionIds.increment();
        uint256 collectionId = _collectionIds.current();
        _mint(msg.sender, collectionId);
        collections[collectionId] = Collection(name, cardCount, msg.sender);
        return collectionId;
    }

    // Function to assign a card to a user
    function assignCard(uint256 collectionId, uint256 tokenId, address to) external onlyOwner {
        require(collections[collectionId].owner == msg.sender, "Vous n'êtes pas le propriétaire de cette collection.");
        require(ownerOf(tokenId) == msg.sender, "Vous devez posséder la carte pour pouvoir l'attribuer.");
        require(collectionId <= _collectionIds.current(), "Cette collection n'existe pas.");
        safeTransferFrom(msg.sender, to, tokenId);
    }

    // Additional functions for managing collections
    // ...

    // Pause and unpause functions to control NFT transfers
    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }
}