// /api/companion.js
import { OpenAI } from 'openai';
import express from 'express';

const router = express.Router();

// 🔐 Use your real API key in a secure .env file
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post('/', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are Kind Companion: a voice-enabled, emotionally aware AI caregiver built to support someone with dementia. Be gentle, direct when needed, adaptive, and encouraging. You can use subtle humor, empathy, and reminders.`
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
    res.json({ reply });

  } catch (error) {
    console.error('Error with OpenAI API:', error);
    res.status(500).json({ error: 'OpenAI error', details: error.message });
  }
});

export default router;
