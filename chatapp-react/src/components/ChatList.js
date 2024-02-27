import React from "react";
import { useChat } from "../context/ChatContext";
import "./ChatList.css";

const ChatList = () => {
  const { messages } = useChat();

  return (
    <div className="chat-list">
      <ul className="message-list">
        {messages.map((message, index) => (
          <li
            key={index}
            className={`message-item ${message.fromMe ? "from-me" : ""}`}>
            <div className="message-content">
              <span className="message-text">{message.message}</span>
            </div>
            <div className="message-timestamp">
              {new Date(message.when).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
