// pages/ChatPage.jsx

import React, { useState } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, inputText.trim()]);
      setInputText('');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-600 flex flex-col justify-center items-center px-4 sm:px-8">
      <h1 className="text-3xl text-center mb-8 text-brown">Welcome to Certainfy-classifier</h1>
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-4 sm:p-8">
        <div className="mb-8">
          {messages.map((message, index) => (
            <p key={index} className="mb-2 text-gray-800">
              {message}
            </p>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            className="flex-grow border border-gray-300 rounded-l-lg p-2 sm:px-4 sm:py-2 text-black"
            placeholder="Type your message"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            className="bg-zinc-600 hover:bg-zink-dark text-white rounded-r-lg px-4 py-2"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
