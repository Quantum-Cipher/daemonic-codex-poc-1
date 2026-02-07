# Check Daemon

**Type:** Validation Logic  
**Role:** Integrity Verifier  

## Responsibility
Validates the shape, freshness, and integrity of the data returned by the `DaemonStatus`. It prevents "replay attacks" (stale data masquerading as new) and ensures the payload matches the expected schema.

## Trigger
- Post-fetch event (after `Blink` receives data).

## Failure Mode
- **Integrity Violation:** Payload structure mismatch.
- **Stale Data:** Timestamp delta > threshold.

## Observable Output
- Error Log: `Integrity Check Failed: [Reason]`.
- UI Warning: "Data Stale" or "Corrupted Signal".

## Security Posture
- Logic embedded in client/proxy.
- Fails safe (rejects bad data).
