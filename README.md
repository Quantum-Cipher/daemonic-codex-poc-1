Daemonic Codex: Infrastructure & Daemon Control Plane

Repository: Quantum-Cipher/daemonic-codex-infrastructure
GCP Project: daemonic-codex-poc-1

The Architecture
This is a daemon-first control plane where background processes emit verifiable signals, the UI only observes, and the blockchain only anchors truth—never logic.

The Stack
1. GCP (Cloud Run/Functions): The Muscle. Executes the logic.
2. Firebase Hosting: The Face. Serves the static Grimoire.
3. Solidity (Planned): The Memory. Anchors truth on-chain.

The Daemons
Daemons are not just scripts. They are persistent identities with specific roles.
- DaemonStatus: The public heartbeat signal.
- Blink: The client-side ritual of liveness checking.
- Check: The validation logic ensuring signal integrity.
- Bootstrap: The genesis logic for deployment.
- Watchdog: The silent supervisor (Audit > Repair).

See the daemons directory for full specifications.

On-Chain Anchors
We use smart contracts to prove the state of our off-chain daemons.
- DaemonRegistry: Who exists
- SignalAnchor: Did they blink
- IntegrityLog: Did they fail

See the contracts directory for the Solidity source.

Deployment
1. Deploy Infrastructure (GCP and Firebase)
firebase deploy

2. Verify Heartbeat
curl https://[YOUR-FUNCTION-URL]/daemonStatus

Security Rules
- No Sudo: Daemons run with least privilege.
- No Opaque Auto-Healing: We fix what we can see. We log what we cannot.
- Observable: If it does not emit a signal, it does not exist.
