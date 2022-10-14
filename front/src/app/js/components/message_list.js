import React from 'react';
import Message from './message';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let messages = this.props.messages.map((message) => <Message key={message.from} from={message.from} content={message.content} timestamp={message.timestamp}/>);

    return <ul>
      {messages}
    </ul>;
  }
}

export default MessageList;
