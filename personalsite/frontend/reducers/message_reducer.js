const defaultState = () => Object.freeze({
  entities: {}
});

const MessageReducer = (state = defaultState(), action) => {
  Object.freeze(state);
  return state;
};

export default MessageReducer;
