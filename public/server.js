const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.XAI_API_KEY;

if (!API_KEY) {
  console.error('❌ ERROR: XAI_API_KEY environment variable is not set.');
  process.exit(1);
}

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, 'public')));

/* ── PROXY: xAI Grok ── */
app.post('/api/chat', async (req, res) => {
  try {
    const { system, messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request: messages array required.' });
    }

    const payload = {
      model: 'grok-3',
      max_tokens: 1000,
      messages: [
        { role: 'system', content: system || 'You are OMNISCI, a universal knowledge AI.' },
        ...messages
      ]
    };

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'xAI API error' });
    }

    if (!data.choices || !data.choices[0]) {
      return res.status(500).json({ error: 'No response from Grok.' });
    }

    res.json({ reply: data.choices[0].message.content });

  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Server error: ' + err.message });
  }
});

/* ── HEALTH CHECK ── */
app.get('/health', (req, res) => {
  res.json({ status: 'ok', model: 'grok-3', timestamp: new Date().toISOString() });
});

/* ── CATCH-ALL ── */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✦ OMNISCI (xAI/Grok) running on port ${PORT}`);
});
