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

    mapping(string => Cert) public certificates;

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
        require(bytes(certificates[_hash].hash).length == 0, "Already exists");

        certificates[_hash] = Cert(
            _name,
            _course,
            _year,
            _hash,
            true
        );
    }

    function verifyCertificate(string memory _hash) public view returns (Cert memory) {
        return certificates[_hash];
    }

    function revokeCertificate(string memory _hash) public onlyAdmin {
        certificates[_hash].isValid = false;
    }
}