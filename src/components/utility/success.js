import React, {Component} from 'react';

export default class success extends Component {

  render() {
    return(
      <React.Fragment>[
      <span className="text-success">+
      </span>]
      <span>
      {this.props.children}
      </span>

      </React.Fragment>
    );
  }
}