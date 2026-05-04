import { ethers } from "ethers";

// Replace this with your actual deployed contract address later
export const contractAddress = "0xdB33D3b17D1f7365E113b650757bCb96Ab01DBb4"; // Sepolia hash-based deployment
export const abi = [
    "function issueCertificate(string memory _name, string memory _course, uint _year, string memory _hash) public",
    "function verifyCertificate(string memory _hash) public view returns (tuple(string studentName, string course, uint256 year, string hash, bool isValid))",
    "function revokeCertificate(string memory _hash) public"
];

export const getContract = async () => {
    if (!window.ethereum) throw new Error("No crypto wallet found. Please install it.");
    
    await window.ethereum.request({ method: "eth_requestAccounts" });

    try {
        // Force MetaMask to switch to Sepolia testnet
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xaa36a7' }], // Hex for 11155111
        });
    } catch (switchError) {
        // If Sepolia is not added to their MetaMask
        if (switchError.code === 4902) {
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0xaa36a7',
                    chainName: 'Sepolia',
                    rpcUrls: ['https://rpc2.sepolia.org'],
                    nativeCurrency: { name: 'Sepolia ETH', symbol: 'ETH', decimals: 18 },
                    blockExplorerUrls: ['https://sepolia.etherscan.io']
                }],
            });
        }
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(contractAddress, abi, signer);
};
