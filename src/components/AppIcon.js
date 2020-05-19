import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faTerminal, faWallet } from '@fortawesome/free-solid-svg-icons'

export default class AppIcon extends Component {

  icon = {
    'mail' : <FontAwesomeIcon icon={faEnvelope} size="lg" />,
    'terminal' : <FontAwesomeIcon icon={faTerminal} size="lg"/>,
    'wallet' : <FontAwesomeIcon icon={faWallet} size="lg" />,

  }

  handleAppClick = () => {
    this.props.handleAppClick(this.props);
  }

  


  render() {
    const showNotifCount = (this.props.notifCount > 0) ? <span className="notif-count">{this.props.notifCount}</span> : '';
    const classes = [this.props.appName,'app-icon','rounded']
		const installed = (this.props.installed === false)?'app-not-installed':'app-installed';
    return (
      <div className={`col-3 mt-3 ${installed}`}>
        <button className={classes.join(' ')} onClick={this.handleAppClick}>{showNotifCount}
        {this.icon[this.props.appName]}
        
        </button>
        <h6 className='text-center'><small className="appTitle">{this.props.appName} </small></h6>        
      </div>
    );
  }
}