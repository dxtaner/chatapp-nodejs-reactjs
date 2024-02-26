const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const Messages = require("./lib/Messages");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get("/", (req, res) => {
  res.end("Merhaba Socket.IO");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  Messages.list((messages) => {
    socket.emit("message-list", messages);
  });

  socket.on("new-message", (message) => {
    Messages.upsert({ message });
    socket.broadcast.emit("receive-message", message);
  });

  socket.on("disconnect", () => console.log("a user disconnected"));
});

const PORT = process.env.PORT || 3033;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
