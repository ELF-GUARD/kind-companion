# Kind Companion

**A voice-enabled AI caregiver for people living with dementia or Alzheimer’s. Built with GPT-4 and compassion.**

## What It Does
- Provides memory support, safety monitoring, and emotional companionship
- Uses voice input and output for natural interaction
- Detects risk states and sends alerts to caregivers
- Builds rapport and earns trust over time

## How to Run
1. Clone this repo
2. Add your OpenAI API key to `api/companion.js`
3. Open `index.html` in the browser
4. Speak, interact, and test alert scenarios

## Status Tracking
- `Stable`, `Drifted`, `Compromised`, `Critical`
- Alerts triggered for unsafe conditions

## Roadmap
- Memory cue reinforcement module
- Real alert dispatch (SMS/email)
- Wearable camera integration
- Care Hub dashboard

---
📡 Kind Companion Internal API Spec
This project includes a full Swagger/OpenAPI 3.1 specification describing the internal actions that Kind Companion can perform.

These actions include:

🎙️ Asking and remembering the user’s name

🧠 Analyzing message tone and tracking safety state (Stable → Critical)

🔔 Triggering caregiver alerts when risk is detected

🧩 Reinforcing known facts and cues to support memory

💬 Responding to emotional sentiment (sadness, confusion, happiness)

🏃 Prompting physical tasks (drink water, stretch, etc.)

📄 View the full API spec online:
🔗 Swagger Editor → Paste in kind-companion-actions.yaml

🛠️ You can use this spec to:

Generate RESTful routes

Mock GPT Agent behavior

Connect a frontend agent to real-time stateful logic

**Built with ❤️ by Edward R. Aylward and GPT-4**
