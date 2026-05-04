# VerifyIt - Decentralized Academic Credential Verification System

VerifyIt is a modern, blockchain-powered application designed to securely issue and instantly verify academic credentials using Ethereum. It utilizes Hash-Based PDF Verification to ensure that physical documents are 100% tamper-proof while maintaining absolute data privacy.

## Features
- **Hash-Based Document Verification**: Generates SHA-256 hashes of PDF certificates directly in the browser. 
- **Tamper-Proof Storage**: Only the cryptographic hash is stored on the Sepolia Testnet, never the physical file.
- **Instant Validation**: Anyone can upload a PDF to instantly verify its authenticity against the blockchain ledger.
- **Admin Revocation**: Institutions can revoke certificates on-chain if issued in error.

## Technology Stack
- **Smart Contract**: Solidity, Hardhat, Ethers.js
- **Frontend**: React, Vite, Tailwind CSS, Crypto-JS

---

## 🚀 How to Deploy to Vercel

Because this project is built with Vite, deploying it to Vercel is incredibly simple and completely free.

### Step 1: Push to GitHub
If you haven't already, push this entire repository to your GitHub account.

### Step 2: Import into Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** -> **Project**.
3. Connect your GitHub account and import this repository.

### Step 3: Configure Build Settings (CRITICAL)
Because the React frontend code lives inside the `client/` folder (and not the root of the repository), you MUST configure the **Root Directory** setting in Vercel before you hit deploy.

1. On the "Configure Project" screen, look for **Root Directory**.
2. Click **Edit** and type `client`.
3. The Framework Preset should automatically be detected as **Vite**.
4. You **do not** need to add any Environment Variables (like `.env`) to Vercel. The `.env` file was only used for deploying the smart contract from your local machine, not for running the frontend.

### Step 4: Deploy
Click the **Deploy** button. Vercel will automatically build the React app and give you a live, public URL (e.g., `https://verifyit.vercel.app`).

---

**Note**: The Smart Contract is already permanently deployed to the Sepolia Testnet. The frontend automatically communicates with it using the pre-configured contract address in `client/src/utils/contract.js`.
