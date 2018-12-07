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
window.showoption1 = function(){
      var o=document.getElementById("cocost1");
  if( o.style.display == 'none' )
  {
    o.style.display='';  
  }
  else
  {
    o.style.display='none';   
  }
}

window.showoption2 = function(){
      var o=document.getElementById("cocost2");
  if( o.style.display == 'none' )
  {
    o.style.display='';  
  }
  else
  {
    o.style.display='none';   
  }
}

window.showoption3 = function(){
      var o=document.getElementById("cocost3");
  if( o.style.display == 'none' )
  {
    o.style.display='';  
  }
  else
  {
    o.style.display='none';   
  }
}

window.showoption4 = function(){
      var o=document.getElementById("cocost4");
  if( o.style.display == 'none' )
  {
    o.style.display='';  
  }
  else
  {
    o.style.display='none';   
  }
}

window.showoption5 = function(){
      var o=document.getElementById("cocost5");
  if( o.style.display == 'none' )
  {
    o.style.display='';  
  }
  else
  {
    o.style.display='none';   
  }
}

window.showoption6 = function(){
      var o=document.getElementById("cocost6");
  if( o.style.display == 'none' )
  {
    o.style.display='';  
  }
  else
  {
    o.style.display='none';   
  }
}

window.showoption7 = function(){
      var o=document.getElementById("cocost7");
  if( o.style.display == 'none' )
  {
    o.style.display='';  
  }
  else
  {
    o.style.display='none';   
  }
}
window.upyourgood = function(){
      var o=document.getElementById("uppp");
  if( o.style.display == 'none' )
  {
    o.style.display='';  
  }
  else
  {
    o.style.display='none';   
  }
}

window.upgood1 = function() {
   let  pic1 = $("#inp1").val();
   let  nam1 = $("#inn1").val();
   let  goo1 = $("#ing1").val();
   let  sit1 = $("#ins1").val();
      let  up1 = $("#u1").val();
      let  pri1 = $("#uc1").val();
   document.getElementById("play1").src=pic1;
   document.getElementById("inp1").value="";

   document.getElementById("name1").innerHTML=nam1;   
   document.getElementById("inn1").value="";
   document.getElementById("goodname1").innerHTML=goo1;
   document.getElementById("ing1").value="";
   document.getElementById("site1").innerHTML=sit1;
   document.getElementById("ins1").value="";
   document.getElementById("u1").value="";
   document.getElementById("uc1").value="";
   $("#up-msg").html("上架成功");

  var o=document.getElementById("box");
  if( o.style.display == 'none' )
  {
    o.style.display='';  
  }
  else
  {
    o.style.display='none';   
  }

 
}

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

window.returnTokens2 = function() {

  
  $("#return-msg").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy2({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData();
}

window.returnTokens3 = function() {

  
  $("#return-msg").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy3({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData();
}

window.returnTokens4 = function() {

  
  $("#return-msg").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy4({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData();
}

window.returnTokens5 = function() {

  
  $("#return-msg").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy5({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData();
}

window.returnTokens6 = function() {

  
  $("#return-msg").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy6({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData();
}

window.returnTokens7 = function() {

  
  $("#return-msg2").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy7({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg2").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData2();
}

window.returnTokens8 = function() {

  
  $("#return-msg2").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy8({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg2").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData2();
}


window.returnTokens9 = function() {

  
  $("#return-msg2").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy9({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg2").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData2();
}

window.returnTokens10 = function() {

  
  $("#return-msg2").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy10({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg2").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData2();
}

window.returnTokens11 = function() {

  
  $("#return-msg2").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy11({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg2").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData2();
}

window.returnTokens12 = function() {

  
  $("#return-msg2").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy12({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg2").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData2();
}

window.returnTokens13 = function() {

  
  $("#return-msg3").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy13({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg3").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData3();
}

window.returnTokens14 = function() {

  
  $("#return-msg3").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy14({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg3").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData3();
}

window.returnTokens15 = function() {

  
  $("#return-msg3").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy15({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg3").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData3();
}

window.returnTokens16 = function() {

  
  $("#return-msg3").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy16({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg3").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData3();
}

window.returnTokens17 = function() {

  
  $("#return-msg3").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy17({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg3").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData3();
}

window.returnTokens18 = function() {

  
  $("#return-msg3").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy18({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg3").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData3();
}

window.returnTokens19 = function() {

  
  $("#return-msg4").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy19({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg4").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData4();
}

window.returnTokens20 = function() {

  
  $("#return-msg4").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy20({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg4").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData4();
}

window.returnTokens21 = function() {

  
  $("#return-msg4").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy21({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg4").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData4();
}

window.returnTokens22 = function() {

  
  $("#return-msg4").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy22({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg4").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData4();
}

window.returnTokens23 = function() {

  
  $("#return-msg4").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy23({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg4").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData4();
}

window.returnTokens24 = function() {

  
  $("#return-msg4").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy24({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg4").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData4();
}

window.returnTokens25 = function() {

  
  $("#return-msg5").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy25({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg5").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData5();
}

window.returnTokens26 = function() {

  
  $("#return-msg5").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy26({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg5").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData5();
}

window.returnTokens27 = function() {

  
  $("#return-msg5").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy27({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg5").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData5();
}

window.returnTokens28 = function() {

  
  $("#return-msg5").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy28({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg5").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData5();
}

window.returnTokens29 = function() {

  
  $("#return-msg5").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy29({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg5").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData5();
}

window.returnTokens30 = function() {

  
  $("#return-msg5").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy30({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg5").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData5();
}

window.returnTokens31 = function() {

  
  $("#return-msg6").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy31({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg6").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData6();
}

window.returnTokens32 = function() {

  
  $("#return-msg6").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy32({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg6").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData6();
}

window.returnTokens33 = function() {

  
  $("#return-msg6").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy33({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg6").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData6();
}

window.returnTokens34 = function() {

  
  $("#return-msg6").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy34({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg6").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData6();
}

window.returnTokens35 = function() {

  
  $("#return-msg6").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy35({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg6").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData6();
}

window.returnTokens36 = function() {

  
  $("#return-msg6").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy36({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg6").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData6();
}

window.returnTokens37 = function() {

  
  $("#return-msg7").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy37({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg7").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData7();
}

window.returnTokens38 = function() {

  
  $("#return-msg7").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy38({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg7").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData7();
}

window.returnTokens39 = function() {

  
  $("#return-msg7").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy39({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg7").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData7();
}

window.returnTokens40 = function() {

  
  $("#return-msg7").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy40({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg7").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData7();
}

window.returnTokens41 = function() {

  
  $("#return-msg7").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy41({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg7").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData7();
}

window.returnTokens42 = function() {

  
  $("#return-msg7").html("交易進行中，請稍後.");
    Voting.deployed().then(function(contractInstance) {
    contractInstance.returnbuy42({value: web3.toWei(0, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#return-msg7").html("交易進行中");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  populateTokenData7();
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
  
}

window.buyTokens4 = function() {
  let tokensToBuy4 = $("#buy4").val();
  let price4 = tokensToBuy4 * tokenPrice4;
  $("#buy4-msg").html("交易已發送，請稍後.");
  Voting.deployed().then(function(contractInstance) {
    contractInstance.buy4({value: web3.toWei(price4, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#buy4-msg").html("");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  
}

window.buyTokens5 = function() {
  let tokensToBuy5 = $("#buy5").val();
  let price5 = tokensToBuy5 * tokenPrice5;
  $("#buy5-msg").html("交易已發送，請稍後.");
  Voting.deployed().then(function(contractInstance) {
    contractInstance.buy5({value: web3.toWei(price5, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#buy5-msg").html("");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  
}

window.buyTokens6 = function() {
  let tokensToBuy6 = $("#buy6").val();
  let price6 = tokensToBuy6 * tokenPrice6;
  $("#buy6-msg").html("交易已發送，請稍後.");
  Voting.deployed().then(function(contractInstance) {
    contractInstance.buy6({value: web3.toWei(price6, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#buy6-msg").html("");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  
}

window.buyTokens7 = function() {
  let tokensToBuy7 = $("#buy7").val();
  let price7 = tokensToBuy7 * tokenPrice7;
  $("#buy7-msg").html("交易已發送，請稍後.");
  Voting.deployed().then(function(contractInstance) {
    contractInstance.buy7({value: web3.toWei(price7, 'ether'), from: web3.eth.accounts[0]}).then(function(v) {
      $("#buy7-msg").html("");
      web3.eth.getBalance(contractInstance.address, function(error, result) {
        $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
      });
    })
  });
  
}

window.Tokensupdate = function() {
  populateTokenData();
  populateTokenData2();
 populateTokenData3();
 populateTokenData4();
 populateTokenData5();
 populateTokenData6();
 populateTokenData7();
}




window.lookupVoterInfo = function() {
  let address = $("#voter-info").val();
  Voting.deployed().then(function(contractInstance) {
    contractInstance.voterDetails.call(address).then(function(v) {	
      document.getElementById('Img1').style.display = "block";	
      $("#tokens-bought").html("大衛雞排券: " + v[0].toString());
	   document.getElementById('Img2').style.display = "block";	
      $("#tokens-bought2").html("小而大水餃券: " + v[1].toString());
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
  	contractInstance.totalTokens2().then(function(v2) {
      $("#tokens-total2").html(v2.toString());
    });
    contractInstance.tokensRemaining2.call().then(function(v2) {
      $("#tokens-remaining2").html(v2.toString());
    });
    contractInstance.tokensSold2.call().then(function(v2) {
      $("#tokens-sold2").html(v2.toString());
    });
    contractInstance.tokenPrice2().then(function(v2) {
      tokenPrice2 = parseFloat(web3.fromWei(v2.toString()));
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

function populateTokenData4() {
  Voting.deployed().then(function(contractInstance) {
    contractInstance.totalTokens4().then(function(v) {
      $("#tokens-total4").html(v.toString());
    });
    contractInstance.tokensRemaining4.call().then(function(v) {
      $("#tokens-remaining4").html(v.toString());
    });
    contractInstance.tokensSold4.call().then(function(v) {
      $("#tokens-sold4").html(v.toString());
    });
    contractInstance.tokenPrice4().then(function(v) {
      tokenPrice4 = parseFloat(web3.fromWei(v.toString()));
      $("#token-cost4").html(tokenPrice4 + " Ether");
    });
    web3.eth.getBalance(contractInstance.address, function(error, result) {
      $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
    });
  });
}

function populateTokenData5() {
  Voting.deployed().then(function(contractInstance) {
    contractInstance.totalTokens5().then(function(v) {
      $("#tokens-total5").html(v.toString());
    });
    contractInstance.tokensRemaining5.call().then(function(v) {
      $("#tokens-remaining5").html(v.toString());
    });
    contractInstance.tokensSold5.call().then(function(v) {
      $("#tokens-sold5").html(v.toString());
    });
    contractInstance.tokenPrice5().then(function(v) {
      tokenPrice5 = parseFloat(web3.fromWei(v.toString()));
      $("#token-cost5").html(tokenPrice5 + " Ether");
    });
    web3.eth.getBalance(contractInstance.address, function(error, result) {
      $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
    });
  });
}

function populateTokenData6() {
  Voting.deployed().then(function(contractInstance) {
    contractInstance.totalTokens6().then(function(v) {
      $("#tokens-total6").html(v.toString());
    });
    contractInstance.tokensRemaining6.call().then(function(v) {
      $("#tokens-remaining6").html(v.toString());
    });
    contractInstance.tokensSold6.call().then(function(v) {
      $("#tokens-sold6").html(v.toString());
    });
    contractInstance.tokenPrice6().then(function(v) {
      tokenPrice6 = parseFloat(web3.fromWei(v.toString()));
      $("#token-cost6").html(tokenPrice6 + " Ether");
    });
    web3.eth.getBalance(contractInstance.address, function(error, result) {
      $("#contract-balance").html(web3.fromWei(result.toString()) + " Ether");
    });
  });
}

function populateTokenData7() {
  Voting.deployed().then(function(contractInstance) {
    contractInstance.totalTokens7().then(function(v) {
      $("#tokens-total7").html(v.toString());
    });
    contractInstance.tokensRemaining7.call().then(function(v) {
      $("#tokens-remaining7").html(v.toString());
    });
    contractInstance.tokensSold7.call().then(function(v) {
      $("#tokens-sold7").html(v.toString());
    });
    contractInstance.tokenPrice7().then(function(v) {
      tokenPrice7 = parseFloat(web3.fromWei(v.toString()));
      $("#token-cost7").html(tokenPrice7 + " Ether");
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
