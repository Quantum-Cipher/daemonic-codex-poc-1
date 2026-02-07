* **Host Project ID:** \`vpc-host-prod-codex-4393\`
* **VPC Name:** \`vpc-prod-shared\`
* **Service Attachment:** \`daemonic-codex-poc-1\`
| Name | Region | CIDR | Purpose |
| :--- | :--- | :--- | :--- |
| \`subnet-prod-1\` | us-central1 | \`10.10.0.0/24\` | Primary Execution Plane |
| \`subnet-prod-2\` | us-east1 | \`10.10.1.0/24\` | DR / Failover Plane |
* **Internal:** Allows all TCP/UDP/ICMP within \`10.10.0.0/16\`
* **Uplink:** Allows Egress to Google APIs (Telemetry)
