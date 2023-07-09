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
    <div className="container mx-auto p-4">
      <div className="border border-gray-300 rounded-lg p-4 mb-4">
        {messages.map((message, index) => (
          <p key={index} className="mb-2">
            {message}
          </p>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="border border-gray-300 rounded-l-lg p-2 flex-grow"
          placeholder="Type your message"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg px-4 py-2"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
