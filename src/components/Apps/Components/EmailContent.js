import React, {Component} from 'react';

export default class EmailContent extends Component {

  render() {
    console.log('the current message object is');
    console.log(this.props.currentMessage);
    let currentMessage = this.props.currentMessage;
    return(
      <div className="row email-content">
        <div className="col-12">
          <h2>{currentMessage.title}</h2>
        </div>
        <div className="col-12">
          <ul>
            <li>from : {currentMessage.from}</li>
            <li>to : {currentMessage.to}</li>
          </ul>
        </div>
        <div className="col-12">
          <article>
            {currentMessage.message}
          </article>
        </div>
      </div>
    )
  }
}