// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Collection is ERC721URIStorage  {
    string public _collectionName;
    uint256 public _cardCount;
    uint256 public _nextTokenId;
    mapping(uint256 => string) private cardMetadata; // Mapping pour stocker les métadonnées des NFT
    mapping(uint256 => string) private _tokenURIs;
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
        _nextTokenId = 0;
    }

     function mint(string memory tokenURI, address user)
        public
        returns (uint256)
    {
        uint256 newItemId = _nextTokenId;
        _mint(user, newItemId);
        _setTokenURI(newItemId, tokenURI);
        _nextTokenId += 1; 
        return newItemId;
    }

    function setAttributes(string memory name, uint256  cardCount) external{
         _collectionName = name;
         _cardCount = cardCount;
    }

    function getCardMetadata(uint256 tokenId) external view returns (string memory) {
        return cardMetadata[tokenId];
    }

    function getCardsMetadataLength() external view returns (uint256) {
        return _nextTokenId;
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