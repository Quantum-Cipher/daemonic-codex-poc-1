# Watchdog Daemon

**Type:** Supervisor (Conceptual/Planned)  
**Role:** Audit Log Supervisor  

## Responsibility
Monitors the health of the other daemons. It does *not* auto-heal (to preserve the forensic state of failure) but emits high-priority alerts when a daemon goes silent or violates integrity.

## Trigger
- Log Sink / Eventarc Trigger (e.g., on 500 Error rate spike).
- Scheduled Cron (checking for "silence").

## Failure Mode
- **Missed Alert:** Watchdog itself fails (Meta-monitoring required).

## Observable Output
- Alert Email / PubSub Message.
- "Incident" entry in Integrity Log.

## Security Posture
- Read-only access to logs.
- Write access to Alerting channels.
