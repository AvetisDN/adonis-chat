import React, { Component } from 'react';

import { ROOM_ALL } from '../actions';

class Rooms extends Component {

    constructor(props) {
        super(props);
        this.handleRoomSelect = this.handleRoomSelect.bind(this)
    }
  state = {
    rooms: []
  };

  componentDidMount () {
    this.fetchRooms();
  }

  fetchRooms = async () => {
    try {
      const rooms = await ROOM_ALL();
        this.setState({ rooms: rooms });
    } catch (_) {
      this.props.history.push('/');
    }
  };

  handleRoomSelect(e) {
    let uuid = e.target.getAttribute('data-uuid');
    this.props.history.push(`/room/${uuid}`);
  };

  render () {
    return (
      <div className="mx-auto p-3 flex flex-col h-screen justify-between" style={{ maxWidth: '800px' }}>
          <ul>
          {this.state.rooms.map((room, i) => {
              return (
                  <li key={room.uuid} data-uuid={room.uuid} onClick={this.handleRoomSelect}>
                      {room.uuid}
                  </li>
              );
          })}
          </ul>
      </div>
    )
  }
}

export default Rooms;
