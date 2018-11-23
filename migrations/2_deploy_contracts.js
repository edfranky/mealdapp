var Voting = artifacts.require("./Voting.sol");
module.exports = function(deployer) {
  deployer.deploy(Voting, 2000,500,300, web3.toWei('0.04', 'ether'),web3.toWei('0.05', 'ether'), web3.toWei('0.06', 'ether'),['Rama', 'Nick', 'Jose']);
};