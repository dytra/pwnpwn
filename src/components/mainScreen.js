import React, { Component } from 'react';

import HomeScreen from './homeScreen';
import AppInterface from './appInterface';
export default class MainScreen extends Component {
  componentDidMount() {

  }
  render() {

    if(this.props.currentScreen==="home-screen") {
      return(
        <React.Fragment>  
        <HomeScreen handleAppClick={this.props.handleAppClick} screenName='home-screen' currentScreen={this.props.currentScreen} {...this.props} />
        </React.Fragment>
      );
    } else if(this.props.currentScreen==="mail-screen") {
      return(
        <React.Fragment>  
         <AppInterface appName="mail-screen" screenName="mail-screen" currentScreen={this.props.currentScreen} {...this.props} />
        </React.Fragment>
      );
    } else if(this.props.currentScreen==="terminal-screen") {
      return(
        <React.Fragment>  
        <AppInterface appName="terminal-screen" screenName="terminal-screen" currentScreen={this.props.currentScreen}  {...this.props} />
        </React.Fragment>
      );
    }
    else if(this.props.currentScreen==="wallet-screen") {
      return(
        <React.Fragment>  
        <AppInterface appName="wallet-screen" screenName="wallet-screen" currentScreen={this.props.currentScreen}  {...this.props} />
        </React.Fragment>
      );
    } else {
      return(
        <React.Fragment>  
        <HomeScreen handleAppClick={this.props.handleAppClick} screenName='home-screen' currentScreen={this.props.currentScreen} />
        </React.Fragment>
      );
    }

    

    // {
    //       'home-screen': <HomeScreen handleAppClick={this.props.handleAppClick} />,
    //       'terminal-screen': <AppInterface appName={this.props.currentScreen}></AppInterface>,
    //       'wallet-screen': <AppInterface appName={this.props.currentScreen}></AppInterface>,
    //       'mail-screen': <AppInterface appName={this.props.currentScreen}></AppInterface>
    //     }[this.props.currentScreen]


  }
}