import React from 'react';

const Message = ({ data }) => {
  const { name, message } = data;

  return (
    <div className="bg-white rounded-lg p-4 shadow">
      <h2 className="text-lg">
        {name}
      </h2>
      <div className="text-gray-600">
        {message}
      </div>
    </div>
  )
};

export default Message;
