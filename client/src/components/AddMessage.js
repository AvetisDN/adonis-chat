import React, { useState } from 'react';

import { MESSAGE_POST } from '../actions';

import Input from './form/Input';
import Button from './form/Button';

const AddMessage = ({ roomId }) => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });
  const { name, message } = formData;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !message) return;

    // we post the new message but don't wait for a response
    // receiving a new message is managed by socket connection
    MESSAGE_POST(formData, roomId);

    setFormData({
      ...formData,
      message: ''
    });
  };

  return (
    <form className="p-3 mb-4" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full sm:w-1/3 px-3 mb-2">
          <Input
            label="Name"
            placeholder="Username"
            name="name"
            onChange={handleChange}
            value={name} />
        </div>
        <div className="w-full sm:w-2/3 px-3 mb-2">
          <Input
            label="Message"
            placeholder="Press Enter to send"
            name="message"
            onChange={handleChange}
            value={message} />
        </div>
      </div>
      <Button type="submit" classes="block md:hidden">
        Send
      </Button>
    </form>
  )
};

export default AddMessage;
