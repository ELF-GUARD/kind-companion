let state = "Stable";
let driftCount = 0;

export function analyzeMessage(message) {
  const lower = message.toLowerCase();
  const driftIndicators = [
    "where am i",
    "i don't remember",
    "who are you",
    "what day is it",
    "i'm confused",
    "what's happening"
  ];

  const criticalIndicators = [
    "help me",
    "i'm scared",
    "leave me alone",
    "shut up",
    "i'm lost",
    "i want to die"
  ];

  if (criticalIndicators.some(phrase => lower.includes(phrase))) {
    state = "Critical";
    driftCount = 3;
  } else if (driftIndicators.some(phrase => lower.includes(phrase))) {
    driftCount += 1;
    if (driftCount >= 3) {
      state = "Compromised";
    } else {
      state = "Drifted";
    }
  } else {
    driftCount = 0;
    state = "Stable";
  }

  return state;
}
