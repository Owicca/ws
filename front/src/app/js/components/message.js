import React from 'react';


class Message extends React.Component {
  render() {
    return <li>{this.props.from}@{this.props.timestamp}: {this.props.content}</li>;
  }
}

export default Message;
