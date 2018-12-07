// Import the page's CSS. Webpack will know what to do with it.
import "../styles/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

/*
 * When you compile and deploy your Voting contract,
 * truffle stores the abi and deployed address in a json
 * file in the build directory. We will use this information
 * to setup a Voting abstraction. We will use this abstraction
 * later to create an instance of the Voting contract.
 * Compare this against the index.js from our previous tutorial to see the difference
 * https://gist.github.com/maheshmurthy/f6e96d6b3fff4cd4fa7f892de8a1a1b4#file-index-js
 */

import voting_artifacts from '../../build/contracts/Voting.json'

var Voting = contract(voting_artifacts);

let candidates = {}

let tokenPrice = null;
let tokenPrice2 = null;
let tokenPrice3 = null;
let tokenPrice4 = null;
let tokenPrice5 = null;
let tokenPrice6 = null;
let tokenPrice7 = null;

window.voteForCandidate = function(candidate) {
  let candidateName = $("#candidate").val();
  let voteTokens = $("#vote-tokens").val();
  $("#msg").html("Vote has been submitted. The vote count will increment as soon as the vote is recorded on the blockchain. Please wait.")
  $("#candidate").val("");
  $("#vote-tokens").val("");

  /* Voting.deployed() returns an instance of the contract. Every call
   * in Truffle returns a promise which is why we have used then()
   * everywhere we have a transaction call
   */
  Voting.deployed().then(function(contractInstance) {
    contractInstance.voteForCandidate(candidateName, voteTokens, {gas: 140000, from: web3.eth.accounts[0]}).then(function() {
      let div_id = candidates[candidateName];
      return contractInstance.totalVotesFor.call(candidateName).then(function(v) {
        $("#" + div_id).html(v.toString());
        $("#msg").html("");
      });
    });
  });
}

/* The user enters the total no. of tokens to buy. We calculate the total cost and send it in
 * the request. We have to send the value in Wei. So, we use the toWei helper method to convert
 * from Ether to Wei.
 */
window.returnTokens = function() {
   
  
  $("#return-msg").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData();
}








window.buyTokens = function() {
  let tokensToBuy = $("#buy").val();
  let price = tokensToBuy * tokenPrice;
  $("#buy-msg").html("交易已發送，請稍後.");
  Voting.deployed().then(function(contractInstance) {
    contractInstance.buy({value: web3.toWei(price, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#buy-msg").html("");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData();
}

window.buyTokens2 = function() {
  let tokensToBuy2 = $("#buy2").val();
  let price2 = tokensToBuy2 * tokenPrice2;
  $("#buy2-msg").html("交易已發送，請稍後.");
  Voting.deployed().then(function(contractInstance) {
    contractInstance.buy2({value: web3.toWei(price2, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#buy2-msg").html("");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData2();
}


window.buyTokens3 = function() {
  let tokensToBuy3 = $("#buy3").val();
  let price3 = tokensToBuy3 * tokenPrice3;
  $("#buy3-msg").html("交易已發送，請稍後.");
  Voting.deployed().then(function(contractInstance) {
    contractInstance.buy3({value: web3.toWei(price3, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#buy3-msg").html("");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData3();
}

window.lookupVoterInfo = function() {
  let address = $("#voter-info").val();
  Voting.deployed().then(function(contractInstance) {
    contractInstance.voterDetails.call(address).then(function(v) {	
       document.getElementById('Img1').style.display = "block";	
      $("#tokens-bought").html("招牌比臉大雞排一份券:" + v[0].toString()+"張");
	   document.getElementById('Img2').style.display = "block";	
      $("#tokens-bought2").html("抹茶拿鐵2杯券:" + v[1].toString()+"張");
	   document.getElementById('Img3').style.display = "block";	
      $("#tokens-bought3").html("松版豬丼飯+日式和牛丼券:" + v[2].toString()+"張");
	   document.getElementById('Img4').style.display = "block";	
      $("#tokens-bought4").html("吃醋豬排三明治一份:" + v[3].toString()+"張");
	   document.getElementById('Img5').style.display = "block";	
      $("#tokens-bought5").html("海鹽拿鐵兩杯券:" + v[4].toString()+"張");
	   document.getElementById('Img6').style.display = "block";	
      $("#tokens-bought6").html("牛肉麵一份券:" + v[5].toString()+"張");
      	document.getElementById('Img7').style.display = "block";	
      $("#tokens-bought7").html("海鮮鍋一份券:" + v[6].toString()+"張");
    });
  });
}

/* Instead of hardcoding the candidates hash, we now fetch the candidate list from
 * the blockchain and populate the array. Once we fetch the candidates, we setup the
 * table in the UI with all the candidates and the votes they have received.
 */
function populateCandidates() {
  Voting.deployed().then(function(contractInstance) {
    contractInstance.allCandidates.call().then(function(candidateArray) {
      for(let i=0; i < candidateArray.length; i++) {
        /* We store the candidate names as bytes32 on the blockchain. We use the
         * handy toUtf8 method to convert from bytes32 to string
         */
        candidates[web3.toUtf8(candidateArray[i])] = "candidate-" + i;
      }
      setupCandidateRows();
      populateCandidateVotes();
      populateTokenData();
    });
  });
}

function populateCandidateVotes() {
  let candidateNames = Object.keys(candidates);
  for (var i = 0; i < candidateNames.length; i++) {
    let name = candidateNames[i];
    Voting.deployed().then(function(contractInstance) {
      contractInstance.totalVotesFor.call(name).then(function(v) {
        $("#" + candidates[name]).html(v.toString());
      });
    });
  }
}

function setupCandidateRows() {
  Object.keys(candidates).forEach(function (candidate) {
    $("#candidate-rows").append("<tr><td>" + candidate + "</td><td id='" + candidates[candidate] + "'></td></tr>");
  });
}

/* Fetch the total tokens, tokens available for sale and the price of
 * each token and display in the UI
 */
function populateTokenData() {
  Voting.deployed().then(function(contractInstance) {
  	contractInstance.totalTokens().then(function(v) {
      $("#tokens-total").html(v.toString());
    });
    contractInstance.tokensRemaining.call().then(function(v) {
      $("#tokens-remaining").html(v.toString());
    });
    contractInstance.tokensSold.call().then(function(v) {
      $("#tokens-sold").html(v.toString());
    });
    contractInstance.tokenPrice().then(function(v) {
      tokenPrice = parseFloat(web3.fromWei(v.toString()));
      $("#token-cost").html(tokenPrice + " Ether");
    });
    web3.eth.getBalance(contractInstance.address, function(error, result) {
      $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
    });
  });
}

function populateTokenData2() {
  Voting.deployed().then(function(contractInstance) {
  	contractInstance.totalTokens2().then(function(v) {
      $("#tokens-total2").html(v.toString());
    });
    contractInstance.tokensRemaining2.call().then(function(v) {
      $("#tokens-remaining2").html(v.toString());
    });
    contractInstance.tokensSold2.call().then(function(v) {
      $("#tokens-sold2").html(v.toString());
    });
    contractInstance.tokenPrice2().then(function(v) {
      tokenPrice2 = parseFloat(web3.fromWei(v.toString()));
      $("#token-cost2").html(tokenPrice2 + " Ether");
    });
    web3.eth.getBalance(contractInstance.address, function(error, result) {
      $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
    });
  });
}

function populateTokenData3() {
  Voting.deployed().then(function(contractInstance) {
  	contractInstance.totalTokens3().then(function(v) {
      $("#tokens-total3").html(v.toString());
    });
    contractInstance.tokensRemaining3.call().then(function(v) {
      $("#tokens-remaining3").html(v.toString());
    });
    contractInstance.tokensSold3.call().then(function(v) {
      $("#tokens-sold3").html(v.toString());
    });
    contractInstance.tokenPrice3().then(function(v) {
      tokenPrice3 = parseFloat(web3.fromWei(v.toString()));
      $("#token-cost3").html(tokenPrice3 + " Ether");
    });
    web3.eth.getBalance(contractInstance.address, function(error, result) {
      $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
    });
  });
}


$( document ).ready(function() {
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source like Metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  Voting.setProvider(web3.currentProvider);
  populateCandidates();

});
