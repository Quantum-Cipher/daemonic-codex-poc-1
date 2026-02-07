// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title DaemonRegistry
 * @dev Immutable record of daemon identities. Prevents silent replacement.
 */
contract DaemonRegistry {
    event DaemonRegistered(bytes32 indexed daemonId, string name, address owner);
    event DaemonUpdated(bytes32 indexed daemonId, string versionHash);

    struct Daemon {
        string name;
        string versionHash; // Git commit or IPFS hash of code
        bool isActive;
        uint256 registeredAt;
    }

    mapping(bytes32 => Daemon) public daemons;
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    function registerDaemon(string memory _name, string memory _versionHash) external onlyAdmin {
        bytes32 daemonId = keccak256(abi.encodePacked(_name, block.timestamp));
        daemons[daemonId] = Daemon(_name, _versionHash, true, block.timestamp);
        emit DaemonRegistered(daemonId, _name, msg.sender);
    }

    function updateDaemonVersion(bytes32 _daemonId, string memory _newVersionHash) external onlyAdmin {
        require(daemons[_daemonId].isActive, "Daemon not found or inactive");
        daemons[_daemonId].versionHash = _newVersionHash;
        emit DaemonUpdated(_daemonId, _newVersionHash);
    }
}
