import React, { Component } from 'react';
import './terminalApp.css';
import ModelTerminal from '../../Models/ModelTerminal';
import Success from '../utility/success';
import Info from '../utility/info';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class TerminalApp extends Component {

  currentHost = this.props.currentHost; 

  componentDidMount() {

  }

  render() {
    // console.log('terminal propsss commandds');
    // console.log(this.props);
    const stdOutput =  this.props.commands.map((d, index) => {
      let outputHTML;

      //if has outputHTML
      if(d.hasOwnProperty('outputHTML')) {
        outputHTML = d.outputHTML;
        
      } else {
        //if output is array
        if(Array.isArray(d.output)) {
          outputHTML = d.output.map((x,i) => {
            return(<li key={`${x}-output-${index}-${i}`}>{x}</li>);
          });
        } else {
               
          outputHTML = <li key={`${d.command}-output-${index}`}>{d.output}</li>;
        }
        
      }
      return (
        <React.Fragment key={`output-commands-${index}`}>
          <li key={`${d.command}-uname-${index}`}>{this.props.userName}@{this.currentHost} $&nbsp;{d.command}</li>
          
          {outputHTML}
        </React.Fragment>
        );
      
    });

    const newComer = new ModelTerminal().appendStdOutput({
      list: ['Loading data...','Segmentation Fault■[]D■■■■■■■■u■','Finding restore point...',<Success>Data found</Success>,<Info>To restore data Run command : restore frank.backup</Info>],
      key:'newcomer',
    });

    return (
      <React.Fragment>
        <ul className="terminal-output">
         
          <li key='welcome'>Welcome to terminal user</li>
          {newComer}
          {stdOutput}

          <li key='input-command'>
            <form onSubmit={this.props.handleExecuteCommand} >
              <p><span className="user-name">{this.props.userName}@{this.currentHost} $ </span><input className="input-command" type="text" onChange={this.props.handleOnTypeCommand} name="command" value={this.props.currentCommand} autoFocus autoComplete="off" spellCheck="false" onKeyUp={this.props.handleKeyUpCommand} /></p>
            </form>
          </li>
          
        </ul>
      </React.Fragment>
    )
  }

}