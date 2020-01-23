import React, { useState } from 'react';

import Button from '../components/form/Button';

import { ROOM_CREATE } from '../actions';

const Home = ({ history }) => {

  const [loading, setLoading] = useState(false);

  const handleRoomCreate = async () => {
    setLoading(true);
    const room = await ROOM_CREATE();
    const { uuid } = room;
    setLoading(false);
    history.push(`/room/${uuid}`);
  };

  const handleRoomList = async () => {
    history.push(`/rooms`);
  };


  return (
    <div className="flex h-screen flex-col justify-center">
      <div className="container mx-auto p-3">
        <a onClick={handleRoomList} disabled={loading}>ROOMS</a>
        <h1>AdonisJS sockets demo</h1>
        <p className="mt-3 mb-5 text-muted">
          Create a chatroom, open it in various tabs, send messages and watch the sockets flow. (Check the console!)
        </p>
        <Button onClick={handleRoomCreate} disabled={loading}>
          Create a new room
        </Button>
      </div>
    </div>
  );
};

export default Home;
