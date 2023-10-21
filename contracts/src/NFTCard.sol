// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.20; 
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
contract NFTCard is ERC721 {

    uint256 private number;
    string private img;
    address private owner;
    uint256 public tokenCount;
    uint256 public tokenURI;

    constructor(uint256 _number, string memory _img, uint256 _tokenCount, uint256 _tokenURI) ERC721(_img, _img) {
    number = _number;
    img = _img;
    tokenCount = _tokenCount;
    tokenURI = _tokenURI;
}
           function getTokenURI(uint256 tokenId) public view returns (string memory) {
        require(ownerOf(tokenId) != address(0),"Token does not exist");
        return string(abi.encodePacked(tokenURI, tokenId));
    }
}
