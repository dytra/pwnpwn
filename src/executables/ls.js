   /*
Return current state + terminal command state
commands : Array()
0: {command: "ls", output: Array(2)}
*/

// import {arrayToList} from '../helper/arrayToList';
import React from 'react';

export const ls = function(state,commandObject) {
  let currentHost = state.terminal.currentHost;
  const files = state.devices[currentHost].files;
  let count = state.terminal.commands.length;
  const newState = {
    ...state,
    terminal : {
      ...state.terminal,
      currentCommand:'',
      commands : [
        ...state.terminal.commands,
        {
          command:commandObject.fullCommand,
          output:files,
          outputHTML: files.map((row,index)=> {
            return(<li key={`file-${count}-${index} `}> {row.fileName} </li>);
          }),
        },
      ],
    }
  }
  return newState;
}