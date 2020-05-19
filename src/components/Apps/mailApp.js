import React, {Component} from 'react';
import './mailApp.css';
import EmailList from './Components/EmailList';
import EmailContent from './Components/EmailContent';

export default class MailApp extends Component {

  render() {
    let {messages,mailView} = this.props;
    console.log('the list of the messages is');
    console.log(messages);
    const generateMessages = messages.map((email,index)=> {
      return (
        <div key={`row ${email.id}`}>
          <EmailList key={email.id} title={email.title} content={email.message} id={email.id} {...this.props} />
        </div>
        );
    });

    function conditionalView(props) {

      if(mailView==='inbox') {
        return(
        <div className="row messages-list">
          <div className="col-12">
            {generateMessages}
          </div>
        </div>);
      } else {
        return(
            <EmailContent {...props} />
        );
      }
    };

    let mainContainer = conditionalView(this.props);
    
    
    console.log('hello there the props of the mail is');
    console.log(this.props);
    return(
      <React.Fragment>
        <h1>MaillApp</h1>
        <div className="container">

          <div className="container row mb-3">
            <div className="col-12">
              <div className="col">
                <button onClick={this.props.handleClickMailHome}>Back</button>
                <button onClick={this.props.handleClickNewEmail}>New</button>
              </div> 
            </div>
          </div>

          {mainContainer}
          

        </div>
      </React.Fragment>
    )
  }

}