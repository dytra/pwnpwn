export const whoami = function(state,commandObject) {
  const newState = {
    ...state,
    terminal: {
      ...state.terminal,
      currentCommand:'',
      commands: [
        ...state.terminal.commands,
        {
          command: commandObject.fullCommand,
          output: state.user.userName,
        },
      ],
    }
  };
  return newState;
}