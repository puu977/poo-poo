const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const SUPABASE_URL = "https://faflrcekwonjawuozgpw.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhZmxyY2Vrd29uamF3dW96Z3B3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0MjgxNzcsImV4cCI6MjA5NjAwNDE3N30.aBqkCKzCEk-U7enf0w0PmIxTwEISR1TUs_p0iJbS-KA";

// ambil pesan terbaru
async function getMessages() {
  const res = await axios.get(`${SUPABASE_URL}/rest/v1/messages?select=*`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`
    }
  });

  return res.data;
}

// kirim pesan bot
async function sendMessage(chat_id, text, bot_id) {
  await axios.post(
    `${SUPABASE_URL}/rest/v1/messages`,
    {
      chat_id,
      sender_id: bot_id,
      message: text
    },
    {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );
}

// logic bot
function handleBot(message) {
  const text = message.message.toLowerCase();

  if (text.includes("halo")) {
    return "Halo! saya bot Puu-Puu ";
  }

  if (text.includes("help")) {
    return "Command: halo, help, ping";
  }

  if (text.includes("ping")) {
    return "Pong! ⚡";
  }

  return null;
}

// loop bot (seperti Discord gateway sederhana)
setInterval(async () => {
  const messages = await getMessages();

  for (let msg of messages) {
    const reply = handleBot(msg);

    if (reply) {
      await sendMessage(msg.chat_id, reply, "bot-1");
    }
  }
}, 3000);

app.listen(3000, () => {
  console.log("Bot running...");
});
