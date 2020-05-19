import {ls} from '../executables/ls';
import {deny} from '../executables/deny';
import {whoami} from '../executables/whoami';
import {clear} from '../executables/clear';
import {help} from '../executables/help';
import {cat} from '../executables/cat';
import {restore} from '../executables/restore';

export const ModelCommand = {

  init : (state,command) => {
    const splitCommand = command.split(' ');
    const theCommand = splitCommand[0];
    let currentHost = state.terminal.currentHost;
    const commandIsAvailable = state.devices[currentHost].availableCommands.includes(theCommand);
    // console.log('command is available ?');
    // console.log(state.devices[currentHost].availableCommands.includes(theCommand));
    
    let commandObject = {
      fullCommand : command,
      command: splitCommand[0],
    }

    
    // if command is not available on the device
    if(commandIsAvailable === false) {
      commandObject = {
        ...commandObject,
        command: 'is',
      };
    } else if(splitCommand.length > 1) { //if there is an argument
        commandObject = {
        ...commandObject,
        arguments: splitCommand.filter((d)=> {
          return d!== theCommand;
        }),
      };
     
    }
    

     return {
       commandObject,
       execute : function ()  {
        let output;
        switch(commandObject.command) {
          case 'ls':
            output = ls(state,commandObject);
            break;
          case 'whoami':
            output = whoami(state,commandObject);
            break;
          case 'clear':
            output = clear(state);
            break;
          case 'help':
            output = help(state,commandObject);
            break;
          case 'cat':
            output = cat(state,commandObject);
            break;
					case 'restore':
						output = restore(state,commandObject);
						break;
          default:
            output = deny(state,commandObject);
            break;
        }
        return output;
      },
     }
  },
  

}