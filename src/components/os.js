import React, { Component } from 'react';
import '../styles/os.css';
import MainScreen from './mainScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignal ,faEnvelope,faBatteryFull} from '@fortawesome/free-solid-svg-icons';
import * as funtu from '@fortawesome/free-solid-svg-icons';


export default class Os extends Component {
  render() {
  console.log('funtuuu');
  console.log(funtu);
    return (
      <React.Fragment>
        <div className="row top-bar">
          <div className="col-12 top-bar-container w-100">
            <div className="row">
              <div className="col-4 pr-0">
                <span><FontAwesomeIcon icon={faSignal} size="sm"/> 4G-LTE
                </span>
              </div>
              <div className="col-5 p-0">
              <span>
              <FontAwesomeIcon icon={faEnvelope} size="sm"/>
                &nbsp;New Message</span>
              </div>
              <div className="col p-0">
                <span><FontAwesomeIcon icon={faBatteryFull} size="sm"/>&nbsp;99%</span>
              </div>
            </div>
            
          </div>
          
        </div>
        <MainScreen {...this.props} />

      </React.Fragment>
    );

  };
}