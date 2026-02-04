import * as functions from "firebase-functions";
import admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

export const bootstrapDaemonPOC = functions.https.onRequest(async (req, res) => {
  try {
    const startTime = new Date().toISOString();
    const daemonRef = db.collection("daemon_status").doc("bootstrap");
    await daemonRef.set({
      status: "awake",
      startedAt: startTime,
      updatedAt: startTime,
      pid: process.pid,
      runtime: process.version
    }, { merge: true });
    const signalRef = db.collection("signals").doc();
    await signalRef.set({
      type: "bootstrap",
      message: "Daemon initialized successfully.",
      createdAt: startTime,
      source: "bootstrapDaemonPOC"
    });
    console.log(`[DAEMON] Bootstrap complete at ${startTime}`);
    res.status(200).json({
      message: "Daemon bootstrap complete",
      startedAt: startTime
    });
  } catch (err) {
    console.error("[DAEMON] Bootstrap failed:", err);
    res.status(500).json({
      error: "Bootstrap failed",
      details: err.message
    });
  }
});
