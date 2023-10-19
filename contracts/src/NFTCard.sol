pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTCard is ERC721 {

    uint256 private number;
    string private img;
    address private owner;
 
    constructor() ERC721(number, img) {
        number = number;
        img = img;
    }

    function attribute() {
        
    }

  
}
