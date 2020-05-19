import React, {Component} from 'react';

export default class EmailList extends Component {

  render() {
    console.log('the props id is ');
    console.log(this.props.id);
    return(
      <div className="row" onClick={() => this.props.handleViewEmail(this.props.id)}>
        <div className="col-12 email-list">
          <h5>{this.props.title}</h5>
          <p>{this.props.content}</p>
        </div>
      </div>
    )
  }
}