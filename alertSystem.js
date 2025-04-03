// alertSystem.js

export function sendAlert(state, context) {
  const timestamp = new Date().toISOString();

  let level = "INFO";
  let message = "";

  switch (state) {
    case "Drifted":
      level = "NOTICE";
      message = `Ward has missed a routine or shown mild confusion. Monitoring.`;
      break;
    case "Compromised":
      level = "WARNING";
      message = `Multiple warning signs detected. Ward may be agitated, lost, or unsafe.`;
      break;
    case "Critical":
      level = "ALERT";
      message = `IMMEDIATE INTERVENTION REQUIRED. Ward may be in danger or shutting down Companion.`;
      break;
    default:
      return; // No alert for Stable
  }

  const log = {
    level,
    message,
    context,
    timestamp,
  };

  // Simulated output (to be replaced by SMS, webhook, or email)
  console.warn("[ALERT DISPATCH]", JSON.stringify(log, null, 2));
}
