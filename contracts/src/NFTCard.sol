pragma solidity ^0.7.3;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTCard is ERC721 {

    uint256 private number;
    string private img;
    address private owner;
    uint256 public tokenCount;
    uint256 public tokenURI;

    constructor() ERC721(number, img, tokenCount , tokenURI) {
        tokenCount = tokenCount;
        number = number;
        img = img;
        tokenURI = tokenURI;
    }

}
