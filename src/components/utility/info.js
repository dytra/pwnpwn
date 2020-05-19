import React, {Component} from 'react';

export default class info extends Component {

  render() {
    return(
      <React.Fragment>[
      <span className="text-info">-
      </span>]
      <span>
      {this.props.children}
      </span>

      </React.Fragment>
    );
  }
}