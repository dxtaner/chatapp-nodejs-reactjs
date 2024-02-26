import io from "socket.io-client";

let socket;

export const initWebSocket = () => {
  const serverUrl = "http://localhost:3033";

  socket = io(serverUrl, {
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log("WebSocket bağlantısı başarıyla kuruldu!");
  });

  return socket;
};

export const sendMessage = (message) => {
  if (!socket) {
    console.error("WebSocket bağlantısı yok!");
    return;
  }

  socket.emit("new-message", message, (response) => {
    if (response.error) {
      console.error("Mesaj gönderilirken hata oluştu:", response.error);
    } else {
      console.log("Mesaj başarıyla gönderildi!");
    }
  });
};

export const subscribeChat = (callback) => {
  if (!socket) {
    console.error("WebSocket bağlantısı yok!");
    return;
  }

  socket.on("receive-message", (message) => {
    console.log("Yeni mesaj alındı:", message);
    callback(message);
  });
};

export const subscribeInitialMessages = (callback) => {
  if (!socket) {
    console.error("WebSocket bağlantısı yok!");
    return;
  }

  socket.on("message-list", (messages) => {
    callback(messages);
  });
};
