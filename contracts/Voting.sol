pragma solidity ^0.4.18;

contract Voting {

 struct voter {
  address voterAddress;
  uint tokensBought;
  uint tokensBought2;
  uint tokensBought3;
  uint tokensBought4;
  uint tokensBought5;
  uint tokensBought6;
  uint tokensBought7;
  uint[] tokensUsedPerCandidate;
 }

 mapping (address => voter) public voterInfo;

 mapping (bytes32 => uint) public votesReceived;

 bytes32[] public candidateList;

 uint public totalTokens;
 uint public totalTokens2;
 uint public totalTokens3;
 uint public totalTokens4;
 uint public totalTokens5;
 uint public totalTokens6;
 uint public totalTokens7;
 uint public balanceTokens;
 uint public balanceTokens2;
 uint public balanceTokens3;
 uint public balanceTokens4;
 uint public balanceTokens5;
 uint public balanceTokens6;
 uint public balanceTokens7;
 uint public tokenPrice;
 uint public tokenPrice2;
 uint public tokenPrice3;
 uint public tokenPrice4;
 uint public tokenPrice5;
 uint public tokenPrice6;
 uint public tokenPrice7;


 constructor (uint tokens, uint tokens2,uint tokens3,uint tokens4,uint tokens5,uint tokens6,uint tokens7,uint pricePerToken,uint pricePerToken2,uint pricePerToken3,uint pricePerToken4 ,uint pricePerToken5,uint pricePerToken6,uint pricePerToken7, bytes32[] candidateNames) public {
  candidateList = candidateNames;
  totalTokens = tokens;
  totalTokens2 = tokens2;
  totalTokens3 = tokens3;
  totalTokens4 = tokens4;
  totalTokens5 = tokens5;
  totalTokens6 = tokens6;
  totalTokens7 = tokens7;
  balanceTokens = tokens;
  balanceTokens2 = tokens2;
  balanceTokens3 = tokens3;
  balanceTokens4 = tokens4;
  balanceTokens5 = tokens5;
  balanceTokens6 = tokens6;
  balanceTokens7 = tokens7;
  tokenPrice = pricePerToken;
  tokenPrice2 = pricePerToken2;
  tokenPrice3 = pricePerToken3;
  tokenPrice4 = pricePerToken4;
  tokenPrice5 = pricePerToken5;
  tokenPrice6 = pricePerToken6;
  tokenPrice7 = pricePerToken7;
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

  function buy4() payable public returns (uint) {
  uint tokensToBuy4 = msg.value / tokenPrice4;
  require(tokensToBuy4 <= balanceTokens4);
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought4 += tokensToBuy4;
  balanceTokens4 -= tokensToBuy4;
  return tokensToBuy4;
 }

   function buy5() payable public returns (uint) {
  uint tokensToBuy5 = msg.value / tokenPrice5;
  require(tokensToBuy5 <= balanceTokens5);
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought5 += tokensToBuy5;
  balanceTokens5 -= tokensToBuy5;
  return tokensToBuy5;
 }

   function buy6() payable public returns (uint) {
  uint tokensToBuy6 = msg.value / tokenPrice6;
  require(tokensToBuy6 <= balanceTokens6);
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought6 += tokensToBuy6;
  balanceTokens6 -= tokensToBuy6;
  return tokensToBuy6;
 }

   function buy7() payable public returns (uint) {
  uint tokensToBuy7 = msg.value / tokenPrice7;
  require(tokensToBuy7 <= balanceTokens7);
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought7 += tokensToBuy7;
  balanceTokens7 -= tokensToBuy7;
  return tokensToBuy7;
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

   function returnbuy2() payable public returns (uint) {
  uint tokensToReturn = 2;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought -= tokensToReturn;
  balanceTokens += tokensToReturn;
  return tokensToReturn;
 }

  function returnbuy3() payable public returns (uint) {
  uint tokensToReturn = 3;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought -= tokensToReturn;
  balanceTokens += tokensToReturn;
  return tokensToReturn;
 }

   function returnbuy4() payable public returns (uint) {
  uint tokensToReturn = 4;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought -= tokensToReturn;
  balanceTokens += tokensToReturn;
  return tokensToReturn;
 }

    function returnbuy5() payable public returns (uint) {
  uint tokensToReturn = 5;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought -= tokensToReturn;
  balanceTokens += tokensToReturn;
  return tokensToReturn;
 }

    function returnbuy6() payable public returns (uint) {
  uint tokensToReturn = 6;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought -= tokensToReturn;
  balanceTokens += tokensToReturn;
  return tokensToReturn;
 }

     function returnbuy7() payable public returns (uint) {
  uint tokensToReturn2 = 1;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought2 -= tokensToReturn2;
  balanceTokens2 += tokensToReturn2;
  return tokensToReturn2;
 }

     function returnbuy8() payable public returns (uint) {
  uint tokensToReturn2 = 2;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought2 -= tokensToReturn2;
  balanceTokens2 += tokensToReturn2;
  return tokensToReturn2;
 }

     function returnbuy9() payable public returns (uint) {
  uint tokensToReturn2 = 3;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought2 -= tokensToReturn2;
  balanceTokens2 += tokensToReturn2;
  return tokensToReturn2;
 }

     function returnbuy10() payable public returns (uint) {
  uint tokensToReturn2 = 4;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought2 -= tokensToReturn2;
  balanceTokens2 += tokensToReturn2;
  return tokensToReturn2;
 }

     function returnbuy11() payable public returns (uint) {
  uint tokensToReturn2 = 5;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought2 -= tokensToReturn2;
  balanceTokens2 += tokensToReturn2;
  return tokensToReturn2;
 }

     function returnbuy12() payable public returns (uint) {
  uint tokensToReturn2 = 6;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought2 -= tokensToReturn2;
  balanceTokens2 += tokensToReturn2;
  return tokensToReturn2;
 }

     function returnbuy13() payable public returns (uint) {
  uint tokensToReturn3 = 1;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought3 -= tokensToReturn3;
  balanceTokens3 += tokensToReturn3;
  return tokensToReturn3;
 }

      function returnbuy14() payable public returns (uint) {
  uint tokensToReturn3 = 2;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought3 -= tokensToReturn3;
  balanceTokens3 += tokensToReturn3;
  return tokensToReturn3;
 }

     function returnbuy15() payable public returns (uint) {
  uint tokensToReturn3 = 3;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought3 -= tokensToReturn3;
  balanceTokens3 += tokensToReturn3;
  return tokensToReturn3;
 }

      function returnbuy16() payable public returns (uint) {
  uint tokensToReturn3 = 4;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought3 -= tokensToReturn3;
  balanceTokens3 += tokensToReturn3;
  return tokensToReturn3;
 }

      function returnbuy17() payable public returns (uint) {
  uint tokensToReturn3 = 5;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought3 -= tokensToReturn3;
  balanceTokens3 += tokensToReturn3;
  return tokensToReturn3;
 }

      function returnbuy18() payable public returns (uint) {
  uint tokensToReturn3 = 6;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought3 -= tokensToReturn3;
  balanceTokens3 += tokensToReturn3;
  return tokensToReturn3;
 }

      function returnbuy19() payable public returns (uint) {
  uint tokensToReturn4 = 1;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought4 -= tokensToReturn4;
  balanceTokens4 += tokensToReturn4;
  return tokensToReturn4;
 }

       function returnbuy20() payable public returns (uint) {
  uint tokensToReturn4 = 2;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought4 -= tokensToReturn4;
  balanceTokens4 += tokensToReturn4;
  return tokensToReturn4;
 }

       function returnbuy21() payable public returns (uint) {
  uint tokensToReturn4 = 3;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought4 -= tokensToReturn4;
  balanceTokens4 += tokensToReturn4;
  return tokensToReturn4;
 }

       function returnbuy22() payable public returns (uint) {
  uint tokensToReturn4 = 4;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought4 -= tokensToReturn4;
  balanceTokens4 += tokensToReturn4;
  return tokensToReturn4;
 }

       function returnbuy23() payable public returns (uint) {
  uint tokensToReturn4 = 5;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought4 -= tokensToReturn4;
  balanceTokens4 += tokensToReturn4;
  return tokensToReturn4;
 }

       function returnbuy24() payable public returns (uint) {
  uint tokensToReturn4 = 6;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought4 -= tokensToReturn4;
  balanceTokens4 += tokensToReturn4;
  return tokensToReturn4;
 }

       function returnbuy25() payable public returns (uint) {
  uint tokensToReturn5 = 1;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought5 -= tokensToReturn5;
  balanceTokens5 += tokensToReturn5;
  return tokensToReturn5;
 }

       function returnbuy26() payable public returns (uint) {
  uint tokensToReturn5 = 2;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought5 -= tokensToReturn5;
  balanceTokens5 += tokensToReturn5;
  return tokensToReturn5;
 }

        function returnbuy27() payable public returns (uint) {
  uint tokensToReturn5 = 3;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought5 -= tokensToReturn5;
  balanceTokens5 += tokensToReturn5;
  return tokensToReturn5;
 }

        function returnbuy28() payable public returns (uint) {
  uint tokensToReturn5 = 4;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought5 -= tokensToReturn5;
  balanceTokens5 += tokensToReturn5;
  return tokensToReturn5;
 }

        function returnbuy29() payable public returns (uint) {
  uint tokensToReturn5 = 5;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought5 -= tokensToReturn5;
  balanceTokens5 += tokensToReturn5;
  return tokensToReturn5;
 }

        function returnbuy30() payable public returns (uint) {
  uint tokensToReturn5 = 6;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought5 -= tokensToReturn5;
  balanceTokens5 += tokensToReturn5;
  return tokensToReturn5;
 }

        function returnbuy31() payable public returns (uint) {
  uint tokensToReturn6 = 1;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought6 -= tokensToReturn6;
  balanceTokens6 += tokensToReturn6;
  return tokensToReturn6;
 }

         function returnbuy32() payable public returns (uint) {
  uint tokensToReturn6 = 2;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought6 -= tokensToReturn6;
  balanceTokens6 += tokensToReturn6;
  return tokensToReturn6;
 }

         function returnbuy33() payable public returns (uint) {
  uint tokensToReturn6 = 3;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought6 -= tokensToReturn6;
  balanceTokens6 += tokensToReturn6;
  return tokensToReturn6;
 }

        function returnbuy34() payable public returns (uint) {
  uint tokensToReturn6 = 4;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought6 -= tokensToReturn6;
  balanceTokens6 += tokensToReturn6;
  return tokensToReturn6;
 }


        function returnbuy35() payable public returns (uint) {
  uint tokensToReturn6 = 5;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought6 -= tokensToReturn6;
  balanceTokens6 += tokensToReturn6;
  return tokensToReturn6;
 }

         function returnbuy36() payable public returns (uint) {
  uint tokensToReturn6 = 6;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought6 -= tokensToReturn6;
  balanceTokens6 += tokensToReturn6;
  return tokensToReturn6;
 }

         function returnbuy37() payable public returns (uint) {
  uint tokensToReturn7 = 1;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought7 -= tokensToReturn7;
  balanceTokens7 += tokensToReturn7;
  return tokensToReturn7;
 }

         function returnbuy38() payable public returns (uint) {
  uint tokensToReturn7 = 2;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought7 -= tokensToReturn7;
  balanceTokens7 += tokensToReturn7;
  return tokensToReturn7;
 } 

          function returnbuy39() payable public returns (uint) {
  uint tokensToReturn7 = 3;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought7 -= tokensToReturn7;
  balanceTokens7 += tokensToReturn7;
  return tokensToReturn7;
 }

          function returnbuy40() payable public returns (uint) {
  uint tokensToReturn7 = 4;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought7 -= tokensToReturn7;
  balanceTokens7 += tokensToReturn7;
  return tokensToReturn7;
 }

          function returnbuy41() payable public returns (uint) {
  uint tokensToReturn7 = 5;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought7 -= tokensToReturn7;
  balanceTokens7 += tokensToReturn7;
  return tokensToReturn7;
 }

          function returnbuy42() payable public returns (uint) {
  uint tokensToReturn7 = 6;
  voterInfo[msg.sender].voterAddress = msg.sender;
  voterInfo[msg.sender].tokensBought7 -= tokensToReturn7;
  balanceTokens7 += tokensToReturn7;
  return tokensToReturn7;
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

  function tokensRemaining4() view public returns (uint) {
  return  balanceTokens4;
 }

   function tokensRemaining5() view public returns (uint) {
  return  balanceTokens5;
 }

   function tokensRemaining6() view public returns (uint) {
  return  balanceTokens6;
 }

   function tokensRemaining7() view public returns (uint) {
  return  balanceTokens7;
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

 function tokensSold4() view public returns (uint) {
  return totalTokens4 - balanceTokens4;
 }

  function tokensSold5() view public returns (uint) {
  return totalTokens5 - balanceTokens5;
 }

  function tokensSold6() view public returns (uint) {
  return totalTokens6 - balanceTokens6;
 }

  function tokensSold7() view public returns (uint) {
  return totalTokens7 - balanceTokens7;
 }

 function voterDetails(address user) view public returns (uint, uint, uint,uint,uint,uint,uint) {
  return (voterInfo[user].tokensBought, voterInfo[user].tokensBought2, voterInfo[user].tokensBought3, voterInfo[user].tokensBought4,voterInfo[user].tokensBought5,voterInfo[user].tokensBought6,voterInfo[user].tokensBought7);
 }

 function transferTo(address account) public {
  account.transfer(address(this).balance);
 }

 function allCandidates() view public returns (bytes32[]) {
  return candidateList;
 }
}
