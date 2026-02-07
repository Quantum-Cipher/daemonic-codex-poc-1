// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title SignalAnchor
 * @dev Timestamped, append-only log of daemon heartbeats.
 * Bridges off-chain execution -> on-chain truth.
 */
contract SignalAnchor {
    event SignalEmitted(bytes32 indexed daemonId, uint256 timestamp, bytes32 statusHash);

    function anchorSignal(bytes32 _daemonId, bytes32 _statusHash) external {
        // No logic, just pure event emission for indexers (The Graph) to pick up.
        // This creates an immutable history of "blinks".
        emit SignalEmitted(_daemonId, block.timestamp, _statusHash);
    }
}
