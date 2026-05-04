import hre from "hardhat";

async function main() {
  const Cert = await hre.ethers.getContractFactory("Certificate");
  const cert = await Cert.deploy();
  await cert.waitForDeployment();

  console.log("Contract deployed to:", await cert.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
