his repository contains the proof-of-concept for the **Daemonic Codex** daemon.

- **Functions**: Firebase Cloud Function `bootstrapDaemonPOC` initializes the daemon, writes a `daemon_status` document and a `signals` document to Firestore.
- **Firestore**: Stores daemon state, logs, and signals.
- **Deployment**: Containerized using Docker and deployable via Cloud Run. GitHub Actions workflow automates deploys on push to `main`.
- **Node Version**: 20
- **License**: MIT
1. Push to GitHub `main` branch.
2. Cloud Build triggers Docker build and Cloud Run deploy.
3. The daemon runs as a Cloud Run service and writes signals to Firestore.

- Add scheduled daemon tasks.
- Extend Firestore collections for blockchain-like signal tracking.
- Migrate to Vertex AI or BigQuery for analytics.

