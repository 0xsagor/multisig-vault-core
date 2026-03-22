const hre = require("hardhat");

async function main() {
  const [owner1, owner2, owner3] = await hre.ethers.getSigners();
  
  const MultiSig = await hre.ethers.getContractFactory("MultiSigWallet");
  // Deploy with 3 owners and a threshold of 2 confirmations
  const wallet = await MultiSig.deploy([owner1.address, owner2.address, owner3.address], 2);

  await wallet.waitForDeployment();
  console.log("MultiSig Wallet deployed to:", await wallet.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
