import React, { useEffect } from "react";
import {
  initWebSocket,
  subscribeChat,
  subscribeInitialMessages,
} from "../WebSocketClient.js";
import ChatForm from "./ChatForm.js";
import ChatList from "./ChatList.js";
import { useChat } from "../context/ChatContext";
import "./Container.css";

function Container() {
  const { setMessages } = useChat();

  useEffect(() => {
    const socket = initWebSocket();

    socket.on("connect", () => {
      subscribeInitialMessages((messages) => setMessages(messages));

      subscribeChat((message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    });

    return () => {};
  }, [setMessages]);

  return (
    <div className="app-container">
      <h1 className="app-title">Chat Application</h1>
      <div className="chat-list-container">
        <ChatList />
      </div>
      <ChatForm />
    </div>
  );
}

export default Container;
