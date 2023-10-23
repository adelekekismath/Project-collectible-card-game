// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.20; 
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
contract NFTCard is ERC721 {

    int private number;
    string private img;
    address private owner;

    constructor(int _number, string memory _img, address _owner) ERC721("POKEMON", "CardNFT") {
        number = _number;
        img = _img;
        owner = _owner;
    }

    function getOwner() external view returns (address) {
        return owner;
    }

}
