import React, { useState, useRef, useEffect } from "react";
import { sendMessage } from "../WebSocketClient.js";
import "./ChatForm.css";
import { useChat } from "../context/ChatContext.js";

function ChatForm() {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);
  const { setMessages } = useChat();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = { message, fromMe: true, when: Date.now() };
    setMessages((prevState) => [...prevState, newMessage]);
    sendMessage(message);
    setMessage("");
    inputRef.current.focus();
  };

  return (
    <form className="chat-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="chat-input"
        ref={inputRef}
      />
      <button type="submit" className="send-button">
        Send
      </button>
    </form>
  );
}

export default ChatForm;
