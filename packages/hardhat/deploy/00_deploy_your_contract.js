// deploy/00_deploy_your_contract.js

const { ethers } = require("hardhat");

const localChainId = "31337";

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  await deploy("Whitelist", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    args: ["0x769699506f972A992fc8950C766F0C7256Df601f"],
    log: true,
  });

  // Getting a previously deployed contract
  const Whitelist = await ethers.getContract("Whitelist", deployer);
  /*  await Whitelist.setPurpose("Hello");
  
    To take ownership of Whitelist using the ownable library uncomment next line and add the 
    address you want to be the owner. 
    // Whitelist.transferOwnership(YOUR_ADDRESS_HERE);

    //const Whitelist = await ethers.getContractAt('Whitelist', "0xaAC799eC2d00C013f1F11c37E654e59B0429DF6A") //<-- if you want to instantiate a version of a contract at a specific address!
  */

  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */

  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const Whitelist = await deploy("Whitelist", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */

  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const Whitelist = await deploy("Whitelist", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */

  // Verify your contracts with Etherscan
  // You don't want to verify on localhost
  // if (chainId !== localChainId) {
  //   await run("verify:verify", {
  //     address: Whitelist.address,
  //     contract: "contracts/Whitelist.sol:Whitelist",
  //     contractArguments: [],
  //   });
  // }
};
module.exports.tags = ["Whitelist"];
