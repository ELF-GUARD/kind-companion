// /api/companion.js
import { OpenAI } from 'openai';
import express from 'express';
import { analyzeMessage } from './stateEngine.js';
import { sendAlert } from './alertSystem.js';

const router = express.Router();

// 🔐 Load your OpenAI API key securely from .env
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post('/', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }

  try {
    // 🧠 Analyze user input and determine state
    const currentState = analyzeMessage(message);
    console.log(`🩺 Kind Companion state: ${currentState}`);

    // 🚨 Trigger alerts if state is serious
    if (currentState === "Compromised" || currentState === "Critical") {
      sendAlert(currentState, { userMessage: message });
    }

    // 🧠 Generate GPT-4 response
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are Kind Companion, a gentle, intelligent, and protective AI caregiver designed to help someone with dementia. Be warm, friendly, but take control when safety is at risk. Speak naturally and earn trust.`
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 300
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply, state: currentState });

  } catch (error) {
    console.error('❌ OpenAI error:', error);
    res.status(500).json({ error: 'OpenAI error', details: error.message });
  }
});

export default router;
