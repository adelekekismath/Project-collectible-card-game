// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFTCard is ERC721URIStorage {
    int private number;
    string private img;
    address private owner;
    uint256 public tokenCount;

    constructor() ERC721("POKEMON", "CardNFT") {
        owner = msg.sender; // Fix owner assignment
    }

    function createCollectible(string memory tokenURI) public returns (uint256) {
        uint256 newItemId = tokenCount;
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        tokenCount = tokenCount + 1;
        return newItemId;
    }

    function mint(string memory _tokenURI) public {
        uint256 newItemId = tokenCount;
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, _tokenURI);
        tokenCount = tokenCount + 1;
    }
}
