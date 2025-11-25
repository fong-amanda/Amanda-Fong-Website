import React from 'react';
import './home.css';

const MessageBubble = ({ 
  message, 
  className = '', 
  tailPosition = 'right',
  style = {} 
}) => {
  return (
    <div className={`message-bubble ${className}`}>
      <div 
        className={`message-bubble-content tail-${tailPosition}`}
        style={{
          maxWidth: style.maxWidth || '300px', 
          ...(style.height ? { height: style.height } : {}),
          ...(style.fontSize ? { fontSize: style.fontSize } : {}),
        }}
      >
        {message}
      </div>
    </div>
  );
};
export default MessageBubble;