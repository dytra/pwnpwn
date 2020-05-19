import React, {Component} from 'react';
// import {render} from 'react-dom';
import '../styles/smartPhone.css';
import Os from './os';


export default class SmartPhone extends Component {

  render(){
    
    return(
      <React.Fragment>
      <div id="smartphone" >
        <div className="iphone"></div>
        <div className="circle"></div>
        <div className="camera"></div>
        <div className="speaker"></div>
        <div className="screen">
        <Os {...this.props } />
        </div>
        <div className="home1" onClick={this.props.handleBackBtn}></div>
        <div className="home2"></div>
        <div className="highlight"></div>
        <div className="line"></div>
        
      </div>
      
      </React.Fragment>
    );
  };
}