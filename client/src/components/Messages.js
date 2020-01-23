import React from 'react';

import Message from './Message';

const Messages = ({ data }) => (
  <div className="messages">
    {data.map(message => (
      <div className="p-2" key={message.id}>
        <Message data={message} />
      </div>
    ))}
    <div className="anchor" />
  </div>
);

export default Messages;
