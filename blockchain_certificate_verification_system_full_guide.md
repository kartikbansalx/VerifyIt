# 🚀 Decentralized Academic Credential Verification System

---

# 📄 1. Project Requirements Document (PRD)

## Objective
Build a simple blockchain-based system where universities issue tamper-proof certificates and employers verify them instantly.

## Stakeholders
- University (Admin)
- Student
- Employer

## Core Features
1. Issue Certificate
2. Verify Certificate
3. Revoke Certificate
4. View Certificate Details

## Functional Requirements

### Issue Certificate
- Only admin wallet can issue
- Inputs:
  - Student Name
  - Course
  - Year
  - Certificate Hash

### Verify Certificate
- Anyone can verify using Certificate ID
- Show:
  - Student Name
  - Course
  - Year
  - Valid / Revoked

### Revoke Certificate
- Only admin can revoke

## Non-Functional Requirements
- Fast response
- Simple UI
- Secure & immutable

---

# 🧠 2. System Design Summary

## Architecture
User (React Frontend)
        ↓
MetaMask Wallet
        ↓
Ethereum Smart Contract

## Key Idea
- Data stored on blockchain
- No backend needed
- Frontend directly interacts with contract

---

# 📁 3. Project Directory Structure

```
project-root/
│
├── contracts/
│   └── Certificate.sol
│
├── scripts/
│   └── deploy.js
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── IssueForm.js
│   │   │   ├── VerifyForm.js
│   │   │   └── ResultCard.js
│   │   │
│   │   ├── utils/
│   │   │   └── contract.js
│   │   │
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
├── hardhat.config.js
└── package.json
```

---

# ⚙️ 4. Setup Instructions

## Install Dependencies

```
npm init -y
npm install --save-dev hardhat
npx hardhat
```

Choose: basic sample project

---

# 🧾 5. Smart Contract Code

Create: contracts/Certificate.sol

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Certificate {

    address public admin;

    constructor() {
        admin = msg.sender;
    }

    struct Cert {
        string studentName;
        string course;
        uint256 year;
        string hash;
        bool isValid;
    }

    mapping(uint => Cert) public certificates;
    uint public certCount;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    function issueCertificate(
        string memory _name,
        string memory _course,
        uint _year,
        string memory _hash
    ) public onlyAdmin {

        certCount++;

        certificates[certCount] = Cert(
            _name,
            _course,
            _year,
            _hash,
            true
        );
    }

    function verifyCertificate(uint _id) public view returns (Cert memory) {
        return certificates[_id];
    }

    function revokeCertificate(uint _id) public onlyAdmin {
        certificates[_id].isValid = false;
    }
}
```

---

# 🚀 6. Deployment Script

Create: scripts/deploy.js

```javascript
const hre = require("hardhat");

async function main() {
  const Cert = await hre.ethers.getContractFactory("Certificate");
  const cert = await Cert.deploy();
  await cert.deployed();

  console.log("Contract deployed to:", cert.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

---

# ⚙️ 7. Hardhat Config

```javascript
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "YOUR_ALCHEMY_URL",
      accounts: ["YOUR_PRIVATE_KEY"]
    }
  }
};
```

---

# 🌐 8. Frontend Setup

```
npx create-react-app client
cd client
npm install ethers
npm install tailwindcss
```

---

# 🔗 9. Contract Connection

Create: src/utils/contract.js

```javascript
import { ethers } from "ethers";

const contractAddress = "YOUR_CONTRACT_ADDRESS";
const abi = [/* paste ABI here */];

export const getContract = async () => {
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, abi, signer);
};
```

---

# 🧩 10. Issue Certificate Component

```javascript
import { useState } from "react";
import { getContract } from "../utils/contract";

export default function IssueForm() {
  const [form, setForm] = useState({});

  const handleSubmit = async () => {
    const contract = await getContract();
    await contract.issueCertificate(
      form.name,
      form.course,
      form.year,
      form.hash
    );
    alert("Certificate Issued");
  };

  return (
    <div>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Course" onChange={e => setForm({...form, course: e.target.value})} />
      <input placeholder="Year" onChange={e => setForm({...form, year: e.target.value})} />
      <input placeholder="Hash" onChange={e => setForm({...form, hash: e.target.value})} />
      <button onClick={handleSubmit}>Issue</button>
    </div>
  );
}
```

---

# 🔍 11. Verify Component

```javascript
import { useState } from "react";
import { getContract } from "../utils/contract";

export default function VerifyForm() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const verify = async () => {
    const contract = await getContract();
    const result = await contract.verifyCertificate(id);
    setData(result);
  };

  return (
    <div>
      <input placeholder="Certificate ID" onChange={e => setId(e.target.value)} />
      <button onClick={verify}>Verify</button>

      {data && (
        <div>
          <p>{data.studentName}</p>
          <p>{data.course}</p>
          <p>{data.year}</p>
          <p>{data.isValid ? "Valid" : "Revoked"}</p>
        </div>
      )}
    </div>
  );
}
```

---

# 🎨 12. UI Design Summary

## Theme
- Dark mode
- Glassmorphism cards
- Gradient buttons

## Pages

### Home Page
- Title: "Verify Academic Certificates Instantly"
- Buttons:
  - Issue Certificate
  - Verify Certificate

### Issue Page
- Card layout form
- Animated button

### Verify Page
- Search box
- Result card with:
  - Name
  - Course
  - Status badge (green/red)

## UI Enhancements
- Hover animations
- Rounded cards
- Soft shadows

---

# 🧪 13. Testing Flow

1. Deploy contract
2. Connect MetaMask
3. Issue certificate
4. Copy ID
5. Verify using ID

---

# ✨ 14. Optional Features

- QR Code verification
- IPFS storage
- Multiple admins
- Certificate download

---

# 🏁 Final Notes

- Keep MVP simple
- Focus on working demo
- Improve UI later

---

You now have a complete working blockchain project blueprint 🚀

