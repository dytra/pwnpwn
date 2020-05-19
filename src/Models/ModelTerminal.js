import {ModelCommand} from './ModelCommand';
import React, {Component} from 'react';

export default class ModelTerminal extends Component {

  constructor(state) {
    super();
    this.state = state;
  }
  
  handleOnTypeCommand (command)  {
    const newState = {...this.state.terminal,currentCommand:command};
    return newState;
  }

  handleExecuteCommandv2(currentCommand) {
    let newState = ModelCommand.init(this.state,currentCommand).execute();

    //reset command history
    newState = {
      ...newState,
      terminal: {
        ...newState.terminal,
        commandHistory: newState.terminal.commandHistoryOrder.length,
      }
    };
    return newState;
  }

  handleKeyUpCommand(keyCode) {
    let newState = this.state;
    const commandHistory = this.state.terminal.commands;
    let commandHistoryOrder = this.state.terminal.commandHistoryOrder;


    if(commandHistory.length >= 1) {
      if(keyCode === 38) { //if up arrow
        if(commandHistoryOrder === 0) {
          commandHistoryOrder = commandHistory.length-1;
        } else {
          commandHistoryOrder -= 1;
        }
        console.log('the order is : ');
        console.log(commandHistoryOrder);
        console.log('the command is');
        console.log(commandHistory[commandHistoryOrder]);
        newState = {
          ...this.state,
          terminal: {
            ...this.state.terminal,
            commandHistoryOrder,
            currentCommand:commandHistory[commandHistoryOrder].command,
          }
        };
      }
    }

    return newState;
    
  }

   appendStdOutput(option) {
    const key = option.key;
    const output = option.list.map((object,row)=> {
      return <li key={`${key}-${row}`}>{object}</li>;
    });
    return output;
  }



}