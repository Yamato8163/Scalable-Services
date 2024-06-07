import React from 'react';

function MessageDisplay({ message }) {
  return (
    <p>{message || 'Loading message...'}</p>
  );
}

export default MessageDisplay;
