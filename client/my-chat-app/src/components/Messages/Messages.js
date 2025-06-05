import React, { useEffect, useRef } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css';

const Messages = ({ messages, name }) => {
  const messagesEndRef = useRef(null);

  // Optional: Scroll to bottom on new messages (if you want manual handling)
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => {
        const isSentByCurrentUser = message.user === name.trim().toLowerCase();

        return (
          <div 
            key={i} 
            className={`message ${isSentByCurrentUser ? 'sent' : 'received'}`}
          >
            {!isSentByCurrentUser && (
              <p className="sentText">{message.user}</p>
            )}
            <div className="messageText">
              <p>{message.text}</p>
            </div>
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </ScrollToBottom>
  );
};

export default Messages;
