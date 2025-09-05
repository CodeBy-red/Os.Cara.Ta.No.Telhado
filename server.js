const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static("public"));

let users = new Map(); // ws -> username
let history = [];
const MAX_HISTORY = 100;

function broadcast(payload, except = null) {
  const data = JSON.stringify(payload);
  for (const client of wss.clients) {
    if (client.readyState === WebSocket.OPEN && client !== except) {
      client.send(data);
    }
  }
}

wss.on("connection", (ws) => {
  ws.on("message", (raw) => {
    let msg;
    try {
      msg = JSON.parse(raw);
    } catch {
      return;
    }

    if (msg.type === "join") {
      users.set(ws, msg.username);
      // envia histórico para o novo usuário
      ws.send(JSON.stringify({ type: "history", data: history }));
      // atualiza lista de online
      broadcast({ type: "users", data: Array.from(users.values()) });
      broadcast({ type: "system", data: `${msg.username} entrou no chat` }, ws);
    }

    if (msg.type === "message") {
      const entry = {
        username: users.get(ws),
        text: msg.text,
        ts: Date.now(),
      };
      history.push(entry);
      if (history.length > MAX_HISTORY) history.shift();
      broadcast({ type: "message", data: entry });
    }

    if (msg.type === "typing") {
      broadcast(
        { type: "typing", data: { username: users.get(ws), isTyping: msg.isTyping } },
        ws
      );
    }
  });

  ws.on("close", () => {
    const username = users.get(ws);
    users.delete(ws);
    if (username) {
      broadcast({ type: "system", data: `${username} saiu do chat` });
      broadcast({ type: "users", data: Array.from(users.values()) });
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
