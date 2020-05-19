/*
Return current state + terminal command state
commands : Array()
0: {command: "ls", output: Array(2)}
*/

// import {arrayToList} from '../helper/arrayToList';

export const help = function(state,commandObject) {
  let currentHost = state.currentHost;
  const availableCommands = state.devices[currentHost].availableCommands;

  const newState = {
    ...state,
    terminal : {
      ...state.terminal,
      currentCommand:'',
      commands : [
        ...state.terminal.commands,
        {
          command:commandObject.fullCommand,
          output:availableCommands,

        },
      ],
    }
  }
            // outputHTML: arrayToList(files,commandObject.command),
  return newState;
}