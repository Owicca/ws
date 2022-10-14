let actions = [
  {"type": "PULL"},
  {"type": "PUSH"}
];

let initialState = {
  "messages": [
    {"from": "1", "content": "1", "timestamp": "1"},
    {"from": "2", "content": "2", "timestamp": "2"},
    {"from": "3", "content": "3", "timestamp": "3"}
  ]
};

function getNew(state = initialState, action) {
  if (action.type == "PULL") {
    return state;
  } else {
    return state;
  }
}
