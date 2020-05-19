import React, { Component } from 'react';
import './index.css';
import SmartPhone from './components/smartPhone';
import ModelTerminal from './Models/ModelTerminal';

class App extends Component {
  constructor() {
    super();
    this.state  = {
      currentScreen: 'home-screen',
      user : {
        userName: 'dytra',
        firstPlay:true,
      },
      terminal: {
        commandHistoryOrder:0,
        currentHost: "localhost",
        currentCommand: '',
        commands: [],
        lastCommand:'',
        notifCount:1,
        installed:true,
      },
      mail: {
        mailView: 'inbox',
        currentMessageId: 1,
        notifCount: 3,
        installed:false,
        messages: [
          {
            id: 1,
            from: 'jake@drac0de.zx',
            to: 'frank@drac0de.zx',
            title: 'Message title 1',
            message: 'testing message 1',
            read: true,
          },
          {
            id: 2,
            from: 'jake@drac0de.zx',
            to: 'frank@drac0de.zx',
            title: 'Message title 2',
            message: 'testing message 2',
            read: false,
          },
        ],
      },
      wallet: {
        notifCount: 1,
        installed:false,
      },
      devices: {
        localhost : {
          userName : 'dytra',
          availableCommands : ['help','ls','clear','whoami','cat','restore'],
          files: 
          [
						{fileName: 'frank.backup',content:'ajdls;kfjas;klejr3klj32;4'},
            {fileName: 'readme.txt',content:'this is a readme file and <strong>thus</strong></br><marquee>You cant expect anything from us</marquee>'},{fileName:'hint001.txt',content:'this is a hint file'},
          ],
        }
      },
    }
        
  }

  handleBackBtn = (target) => {
    console.log('back btn');
    const newState = {
      ...this.state,
      currentScreen: 'home-screen',
    }
    this.setState(newState);
  }

  handleScreenTap = _ => alert('handle screen tap');

  handleAppClick = (app) => {
    //reset notifications
    let newState = {...this.state,}
    newState[app.appName].notifCount = 0;
    this.setState(newState);

    this.changeCurrentScreen(`${app.appName}-screen`);
  };

  changeCurrentScreen = (screen) => {
    const newState = {
      ...this.state,
      currentScreen: screen,
    }
    this.setState(newState);

  }

  currentScreen = () => {
    return this.state;
  }


  handleOnTypeCommand = (e) => {
    const terminal = new ModelTerminal(this.state).handleOnTypeCommand(e.target.value);
    this.setState({...this.state,terminal});
  }

  handleExecuteCommand = (e) => {
    e.preventDefault();
    //if empty
    if(this.state.terminal.currentCommand==='' || this.state.terminal.currentCommand===null) {
      //do nothing
    } else {
      const newState = new ModelTerminal(this.state).handleExecuteCommandv2(this.state.terminal.currentCommand);
      setTimeout(() => {
        this.setState(newState);
      }, 100);
      
    }
  
  }

  handleKeyUpCommand = (e) => {
    const newState = new ModelTerminal(this.state).handleKeyUpCommand(e.keyCode);
    this.setState(newState);
  }

  handleClickNewEmail = (e) => {
    console.log('new email clicked');
  }

  handleViewEmail = (e) => {
    console.log('handle view email');
    console.log(e);
    const newState = {...this.state,
      mail: {...this.state.mail,mailView: 'mail-content'},
    };
    this.setState(newState);
  }

  handleClickMailHome = (e) => {
    const newState = {
      ...this.state,
      mail : {
        ...this.state.mail,
        mailView:'inbox',
      }
    };
    this.setState(newState);
  }

  saveGame() {
    const newSaveFile = {
      ...this.state,
      terminal: {
        ...this.state.terminal,
        commands: [],
      }
    }
    localStorage.setItem('pwnsave', JSON.stringify(newSaveFile));
  }

  loadGame() {
    const saveFile = JSON.parse(localStorage.getItem('pwnsave'));
    this.setState(saveFile);

  }
  


  render() {
    const superState = {
      handleAppClick:this.handleAppClick,
      handleBackBtn:this.handleBackBtn,
      currentScreen:this.state.currentScreen,
      terminalAction:{
        handleOnTypeCommand:this.handleOnTypeCommand,
        handleExecuteCommand:this.handleExecuteCommand,
        handleKeyUpCommand:this.handleKeyUpCommand,
        commands:this.state.terminal.commands,
        currentCommand:this.state.terminal.currentCommand,
        userName:this.state.user.userName,
        currentHost:this.state.terminal.currentHost, 
        notifCount:this.state.terminal.notifCount, 
        user:this.state.user,
				installed:this.state.terminal.installed,
      },
      mailAction:{
        messages: this.state.mail.messages,
        handleClickNewEmail: this.handleClickNewEmail,
        handleViewEmail: this.handleViewEmail,
        handleClickMailHome: this.handleClickMailHome,
        mailView: this.state.mail.mailView,
        currentMessage: this.state.mail.messages.filter((message)=>this.state.mail.currentMessageId===message.id)[0],
        notifCount: this.state.mail.notifCount,
				installed:this.state.mail.installed,
      },
      walletAction: {
        notifCount: this.state.wallet.notifCount,
				installed:this.state.wallet.installed,
      }

    }
    console.log('this is the app js ');
    console.log(superState);
    return (
      <div className="App">
      <h1>{this.state.currentScreen}</h1>
        <SmartPhone {...superState} />
      </div>
    );
  }
}

export default App;
