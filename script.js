const listenBtn = document.getElementById('listenBtn');
const transcriptEl = document.getElementById('transcript');
const responseEl = document.getElementById('response');

listenBtn.addEventListener('click', () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = async (event) => {
    const text = event.results[0][0].transcript;
    transcriptEl.textContent = `You said: "${text}"`;
    const reply = await getCompanionReply(text);
    responseEl.textContent = reply;
  };
});

async function getCompanionReply(text) {
  const response = await fetch('/api/companion', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: text })
  });

  const data = await response.json();
  return data.reply || "I'm here for you.";
}
