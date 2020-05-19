/*
Return current state + terminal command state
commands : Array()
0: {command: "ls", output: Array(2)}
*/
import React from 'react';
import Success from '../components/utility/success'
// import {arrayToList} from '../helper/arrayToList';

export const restore = function(state,commandObject) {
  const currentHost = state.terminal.currentHost;
  const total = state.terminal.commands.length;
  let output;
  if(commandObject.hasOwnProperty('arguments')) {
    const fileArg = commandObject.arguments[0];
    //find the correct file
    const file = state.devices[currentHost].files.filter((file)=> file.fileName === fileArg );
    if(file.length > 1) {
      output = `Unexpected Error while reading file "${fileArg}"`; 
    }
    else if(file.length ===0) { //if file not found
      output = 'no file found';
    } else {
      output = <Success>app settings successfully restored. Press back to see the HomeScreen</Success>;
      output = <li key={`cat-${total}`} >{output}</li>;
    }
  } else {
    output = 'no arguments executed';
  }

  console.log('the output of cat : ');
  console.log(output);


  const newState = {
    ...state,
    terminal : {
      ...state.terminal,
      currentCommand:'',
      commands : [
        ...state.terminal.commands,
        {
          command:commandObject.fullCommand,
          output:output,
          outputHTML:output,
					
        },
      ],
			installed:true,
    },
		mail: {
			...state.mail,
			installed:true,
		},
		wallet: {
			...state.wallet,
			installed:true,
		}
  }
  return newState;
}  