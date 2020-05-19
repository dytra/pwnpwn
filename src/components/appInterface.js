import React, { Component } from 'react';
import TerminalApp from "./Apps/TerminalApp";
import MailApp from './Apps/mailApp';
import WalletApp from './Apps/walletApp';

export default class AppIcon extends Component {


  render() {
    const currentScreen = this.props.currentScreen;
    // console.log('app interface ' + this.props.screenName);
    // console.log(this.props);
    // console.log('the current screen is in appinterface is : ' + this.props.currentScreen);

    var classes = [this.props.screenName,'the-screen',currentScreen === this.props.screenName ? 'active-screen' : ''];

    return (
      <div className={classes.join(' ')}>
        <span>{this.props.appName}</span>
         {{
          'terminal-screen': <TerminalApp {...this.props.terminalAction}  />,
          'mail-screen': <MailApp {...this.props.mailAction} />,
          'wallet-screen': <WalletApp {...this.props} />

        }[this.props.currentScreen]}
      </div>

    );
  }
}