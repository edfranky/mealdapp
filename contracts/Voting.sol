pragma solidity ^0.4.18;

contract Voting {

 struct voter {
  address voterAddress;
  uint tokensBought;
  uint tokensBought2;
  uint tokensBought3;
  uint[] tokensUsedPerCandidate;
 }

 mapping (address => voter) public voterInfo;

 mapping (bytes32 => uint) public votesReceived;

 bytes32[] public candidateList;

 uint public totalTokens;
 uint public totalTokens2;
 uint public totalTokens3;
 uint public balanceTokens;
 uint public balanceTokens2;
 uint public balanceTokens3;
 uint public tokenPrice;
 uint public tokenPrice2;
 uint public tokenPrice3;

 constructor (uint tokens, uint tokens2,uint tokens3,uint pricePerToken,uint pricePerToken2,uint pricePerToken3 , bytes32[] candidateNames) public {
  candidateList = candidateNames;
  totalTokens = tokens;
  totalTokens2 = tokens2;
  totalTokens3 = tokens3;
  balanceTokens = tokens;
  balanceTokens2 = tokens2;
  balanceTokens3 = tokens3;
  tokenPrice = pricePerToken;
  tokenPrice2 = pricePerToken2;
  tokenPrice3 = pricePerToken3;
 }


 function buy() payable public returns (uint) {
  uint tokensToBuy = msg.value / tokenPrice;
  require(tokensToBuy <= balanceTokens);
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought += tokensToBuy;
  balanceTokens -= tokensToBuy;
  return tokensToBuy;
 }


  function buy2() payable public returns (uint) {
  uint tokensToBuy2 = msg.value / tokenPrice2;
  require(tokensToBuy2 <= balanceTokens2);
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought2 += tokensToBuy2;
  balanceTokens2 -= tokensToBuy2;
  return tokensToBuy2;
 }

  function buy3() payable public returns (uint) {
  uint tokensToBuy3 = msg.value / tokenPrice3;
  require(tokensToBuy3 <= balanceTokens3);
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought3 += tokensToBuy3;
  balanceTokens3 -= tokensToBuy3;
  return tokensToBuy3;
 }


 function totalVotesFor(bytes32 candidate) view public returns (uint) {
  return votesReceived[candidate];
 }

 function voteForCandidate(bytes32 candidate, uint votesInTokens) public {
  uint index = indexOfCandidate(candidate);
  require(index != uint(-1));

  if (voterInfo[msg.sender].tokensUsedPerCandidate.length == 0) {
   for(uint i = 0; i < candidateList.length; i++) {
    voterInfo[msg.sender].tokensUsedPerCandidate.push(0);
   }
  }

  uint availableTokens = voterInfo[msg.sender].tokensBought - totalTokensUsed(voterInfo[msg.sender].tokensUsedPerCandidate);
  require (availableTokens >= votesInTokens);

  votesReceived[candidate] += votesInTokens;
  voterInfo[msg.sender].tokensUsedPerCandidate[index] += votesInTokens;
 }

 function totalTokensUsed(uint[] _tokensUsedPerCandidate) private pure returns (uint) {
  uint totalUsedTokens = 0;
  for(uint i = 0; i < _tokensUsedPerCandidate.length; i++) {
   totalUsedTokens += _tokensUsedPerCandidate[i];
  }
  return totalUsedTokens;
 }

 function indexOfCandidate(bytes32 candidate) view public returns (uint) {
  for(uint i = 0; i < candidateList.length; i++) {
   if (candidateList[i] == candidate) {
    return i;
   }
  }
  return uint(-1);
 }


  function returnbuy() payable public returns (uint) {
  uint tokensToReturn = 1;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought -= tokensToReturn;
  balanceTokens += tokensToReturn;
  return tokensToReturn;
 }


 function tokensRemaining() view public returns (uint) {
  return  balanceTokens;
 }

  function tokensRemaining2() view public returns (uint) {
  return  balanceTokens2;
 }

  function tokensRemaining3() view public returns (uint) {
  return  balanceTokens3;
 }


 function tokensSold() view public returns (uint) {
  return totalTokens - balanceTokens;
 }

 function tokensSold2() view public returns (uint) {
  return totalTokens2 - balanceTokens2;
 }


 function tokensSold3() view public returns (uint) {
  return totalTokens3 - balanceTokens3;
 }



 function voterDetails(address user) view public returns (uint, uint,uint) {
  return (voterInfo[user].tokensBought, voterInfo[user].tokensBought2,voterInfo[user].tokensBought3);
 }

 function transferTo(address account) public {
  account.transfer(address(this).balance);
 }

 function allCandidates() view public returns (bytes32[]) {
  return candidateList;
 }
}
