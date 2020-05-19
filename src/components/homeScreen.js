import React, { Component } from 'react';
import AppIcon from './AppIcon';

export default class HomeScreen extends Component {
  render() {
    const currentScreen = this.props.currentScreen;
     var liClasses = [this.props.screenName,'container','the-screen',currentScreen === this.props.screenName ? 'active-screen' : '',];

    return (
      <div className={liClasses.join(' ')}>
        <div className="row">

        <AppIcon appName="mail" handleAppClick={this.props.handleAppClick}  notifCount={this.props.mailAction.notifCount} installed={this.props.mailAction.installed} />


        <AppIcon appName="terminal" handleAppClick={this.props.handleAppClick} notifCount={this.props.terminalAction.notifCount} installed={this.props.terminalAction.installed}/>


        <AppIcon appName="wallet" handleAppClick={this.props.handleAppClick} notifCount={this.props.walletAction.notifCount} installed={this.props.walletAction.installed}/>


        
        </div>
      </div>
      
    );

  }
}