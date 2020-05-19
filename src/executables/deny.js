export const deny = function(state,commandObject) {
  console.log('the command object is : ');
  console.log(commandObject);
  const newState = {
    ...state,
    terminal: {
      ...state.terminal,
      currentCommand:'',
      commands: [
        ...state.terminal.commands,
        {
          command: commandObject.fullCommand,
          output: `The command ${commandObject.command} not found. Type help to list the available commands`,
        },
      ],
    }
  };
  return newState;
}