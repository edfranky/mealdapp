var Voting = artifacts.require("./Voting.sol");
module.exports = function(deployer) {
  deployer.deploy(Voting, 2000,500,300,600,800,900,1000 ,web3.toWei('0.04', 'ether'),web3.toWei('0.05', 'ether'), web3.toWei('0.06', 'ether'),web3.toWei('0.01', 'ether'),web3.toWei('0.02', 'ether'),web3.toWei('0.07', 'ether'),web3.toWei('0.05', 'ether'),['Rama', 'Nick', 'Jose','NN','AA','BB','WW']);
};