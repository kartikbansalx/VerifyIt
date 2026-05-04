import { ethers } from "ethers";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
  const address = "0x441B63A54b47cb11C329918350082AFcAA1A0455";
  const code = await provider.getCode(address);
  
  if (code === "0x") {
    console.log("No contract found at this address on Sepolia.");
  } else {
    console.log("Contract successfully found on Sepolia!");
    console.log("Code length:", code.length);
  }
}

main().catch(console.error);
