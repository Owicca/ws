import React from 'react';
import {useDispatch} from 'react'

import MessageList from './message_list';
import ChatBox from './chat_box';


/*
## Component list:
- ChatBox:
  - MessageList
  - ChatBox
- MessageList:
  - Message
- Message(from, content, timestamp)
- ChatBox:
  - textinput
  - send button:
    - on click send message through ws
*/

class App extends React.Component {
  render() {
    return (
      <>
      <MessageList messages={messages} />
      <ChatBox />
      </>
    );
  }
}

export default App;
