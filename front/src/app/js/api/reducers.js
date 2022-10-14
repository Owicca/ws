export const actions = {
  GET_MESSAGES: 'GET_MESSAGES'
};

const initialState = {
  "messages": [
    {"from": "1", "content": "1", "timestamp": "1"},
    {"from": "2", "content": "2", "timestamp": "2"},
    {"from": "3", "content": "3", "timestamp": "3"}
  ]
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_MESSAGES:
      return state.messages.concat([{"from": "4", "content": "4", "timestamp": "4"}]);
    default:
      return state;
  }
}
