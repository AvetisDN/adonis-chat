import React, { Component } from 'react';

import { ROOM_FETCH } from '../actions';
import connection from '../lib/socket';

import Messages from '../components/Messages';
import AddMessage from '../components/AddMessage';

// a global variable so we can disconnect once we unmount
let subscription;

class Room extends Component {
  state = {
    messages: []
  };

  componentDidMount () {
    connection.connect();

    // storing the subscription in the global variable
    // passing the incoming data handler fn as a second argument
    subscription = connection.subscribe(`room:${this.props.id}`, this.handleMessageAdd);

    // loading existing messages
    this.fetchMessages();
  }

  componentWillUnmount () {
    subscription.close();
  }

  handleMessageAdd = message => {
    const { type, data } = message;

    // you could handle various types here, like deleting or editing a message
    switch (type) {
      case 'room:newMessage':
        this.setState(prevState => ({
          messages: [...prevState.messages, data]
        }));
        break;
      default:
    }
  };

  fetchMessages = async () => {
    try {
      const room = await ROOM_FETCH(this.props.id);
      this.setState({ messages: room.messages });
    } catch (_) {
      this.props.history.push('/');
    }
  };

  render () {
    const { messages } = this.state;
    const { id } = this.props;

    return (
      <div className="mx-auto p-3 flex flex-col h-screen justify-between" style={{ maxWidth: '800px' }}>
        <Messages data={messages} />
        <AddMessage roomId={id} />
      </div>
    )
  }
}

export default Room;
