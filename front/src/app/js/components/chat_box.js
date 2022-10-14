import React from 'react';


class ChatBox extends React.Component {
  render() {
    return (
      <>
      <input type="text" id="chat_box_input" name="chat_box_input" />
      <input type="submit" />
      </>
    );
  }
}

export default ChatBox;
