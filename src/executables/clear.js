export const clear = function(state,commandObject) {
  const newState = {
    ...state,
    terminal: {
      ...state.terminal,
      currentCommand:'',
      commands: [],
    }
  };
  return newState;
}