// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// NFT contract to inherit from.
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Helper functions OpenZeppelin provides.
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

// Helper we wrote to encode in Base64
import "./libraries/Base64.sol";


import "hardhat/console.sol";

// Our contract inherits from ERC721, which is the standard NFT contract!
contract MyEpicGame is ERC721 {

  struct CharacterAttributes {
    string name;
    string imageURI;
    uint hp;
    uint maxHp;
    uint characterIndex;
    uint attackDamage;
  }

  struct BigBoss {
    string name;
    string imageURI;
    uint hp;
    uint maxHp;
    uint attackDamage;
  }

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  CharacterAttributes[] defaultCharacters;
  // @notice Instantiates the boss.
  // @param name The name of the boss.
  // @param imageURI The URI of the image used to represent the boss in UI.
  // @param hp Current HP of the boss.
  // @param maxHp Maximum boss HP.
  // @param attackDamage Boss's attack damage which is dealt to player.
  BigBoss public bigBoss;

  // @notice Used to index minted NFTs.
  mapping(uint256 => CharacterAttributes) public nftHolderAttributes;

  // @notice Used to relate player's address to a particular NFT.
  mapping(address => uint256) public nftHolders;

  // @notice When the NFT mint is finished, notify the frontend.
  event CharacterNFTMinted(address sender, uint256 tokenId, uint256 characterIndex);

  // @notice When the attack of the player is completed, notify the frontend.
  event AttackComplete(uint newBossHp, uint newPlayerHp);

  constructor(
    string[] memory characterNames,
    string[] memory characterImageURIs,
    uint[] memory characterHp,
    uint[] memory characterAttackDmg,
    string memory bossName,
    string memory bossImageURI,
    uint bossHp,
    uint bossAttackDamage
  )
    ERC721("Heroes", "HERO")
  {
    bigBoss = BigBoss({
      name: bossName,
      imageURI: bossImageURI,
      hp: bossHp,
      maxHp: bossHp,
      attackDamage: bossAttackDamage
    });
    console.log("Done initializing boss %s w/ HP %s, img %s", bigBoss.name, bigBoss.maxHp, bigBoss.imageURI);

    for(uint i = 0; i < characterNames.length; i += 1) {
      defaultCharacters.push(CharacterAttributes({
        characterIndex: i,
        name: characterNames[i],
        imageURI: characterImageURIs[i],
        hp: characterHp[i],
        maxHp: characterHp[i],
        attackDamage: characterAttackDmg[i]
      }));
      CharacterAttributes memory c = defaultCharacters[i];
      console.log("Done initializing %s w/ HP %s, img %s", c.name, c.hp, c.imageURI);
    }
    _tokenIds.increment();
  }

  // @notice Mints the character NFT with a given index.
  // @param _characterIndex The index of the character (characters are initialized when the contract is deployed).
  // @dev Minted NFT gets an unique ID mapped to CharacterAttributes with the nftHolderAttributes mapping.
  function mintCharacterNFT(uint _characterIndex) external {
    uint256 newItemId = _tokenIds.current();
    _safeMint(msg.sender, newItemId);

    nftHolderAttributes[newItemId] = CharacterAttributes({
      characterIndex: _characterIndex,
      name: defaultCharacters[_characterIndex].name,
      imageURI: defaultCharacters[_characterIndex].imageURI,
      hp: defaultCharacters[_characterIndex].hp,
      maxHp: defaultCharacters[_characterIndex].maxHp,
      attackDamage: defaultCharacters[_characterIndex].attackDamage
    });

    console.log("Minted NFT w/ tokenId %s and characterIndex %s", newItemId, _characterIndex);
    nftHolders[msg.sender] = newItemId;
    _tokenIds.increment();

    emit CharacterNFTMinted(msg.sender, newItemId, _characterIndex);
  }

  // @notice Makes player attack the boss.
  // @dev See require statements.
  function attackBoss() public {
    uint256 nftTokenIdOfPlayer = nftHolders[msg.sender];
    CharacterAttributes storage player = nftHolderAttributes[nftTokenIdOfPlayer];
    console.log("\nPlayer w/ character %s about to attack. Has %s HP and %s AD.", player.name, player.hp, player.attackDamage);
    console.log("Boss %s has %s HP and %s AD.", bigBoss.name, bigBoss.hp, bigBoss.attackDamage);

    require(
      player.hp > 0,
      "Error: character must have HP to attack the boss."
    );

    require(
      bigBoss.hp > 0,
      "Error: boss must have HP to attack boss."
    );

    if (bigBoss.hp < player.attackDamage) {
      bigBoss.hp = 0;
    } else {
      bigBoss.hp -= player.attackDamage;

    }
    if (player.hp < bigBoss.attackDamage) {
      player.hp = 0;
    } else {
      player.hp -= bigBoss.attackDamage;
    }

    console.log("Player attacked boss. New boss HP: %s.", bigBoss.hp);
    console.log("Boss attacked player. New player HP: %s.\n", player.hp);

    emit AttackComplete(bigBoss.hp, player.hp);
  }

  // @notice Used to generate JSON with the info about the NFT.
  // @param _tokenId The unique ID of the NFT.
  // @return A string with a base64-encoded JSON.
  // @dev An local library is used to handle base64 encoding.
  function tokenURI(uint256 _tokenId) public view override returns (string memory) {
    CharacterAttributes memory charAttributes = nftHolderAttributes[_tokenId];

    string memory strHp = Strings.toString(charAttributes.hp);
    string memory strMaxHp = Strings.toString(charAttributes.maxHp);
    string memory strAttackDamage = Strings.toString(charAttributes.attackDamage);
    string memory json = Base64.encode(
      abi.encodePacked(
        '{"name": "',
        charAttributes.name,
        ' -- NFT #: ',
        Strings.toString(_tokenId),
        '", "description": "An epic NFT", "image": "ipfs://',
        charAttributes.imageURI,
        '", "attributes": [ { "trait_type": "Health Points", "value": ',strHp,', "max_value":',strMaxHp,'}, { "trait_type": "Attack Damage", "value": ',
        strAttackDamage,'} ]}'
    )
  );
    string memory output = string(
    abi.encodePacked("data:application/json;base64,", json)
  );
  return output;
  }

  // @notice Used to probe tell whether caller has a NFT associated with caller's address.
  // @return CharacterAttributes struct, empty if there's no associated NFT.
  function checkIfUserHasNFT() public view returns (CharacterAttributes memory) {
    uint256 userNftTokenId = nftHolders[msg.sender];
    if (userNftTokenId > 0) {
      return nftHolderAttributes[userNftTokenId];
    } else {
      CharacterAttributes memory emptyStruct;
      return emptyStruct;
    }
  }

  // @notice Used to fetch all default characters with their stats.
  // @return CharacterAttributes[] struct array with all default character stats.
  // @dev defaultCharacters struct array is filled in constructor.
  // @custom:character-info Each character has index, name, imageURI, hp, maxHp, attackDamage.
  function getAllDefaultCharacters() public view returns (CharacterAttributes[] memory) {
    return defaultCharacters;
  }

  // @notice Used to fetch the boss data.
  // @return BigBoss struct.
  // @dev bigBoss struct is filled in constructor.
  function getBigBoss() public view returns (BigBoss memory) {
    return bigBoss;
  }
}

