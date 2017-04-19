import React, { Component } from 'react';

import { browserHistory } from 'react-router';

class CommentsTopLevel extends Component {
    constructor(props) {
        super(props)
    }
  render() {
      console.log(this.props)

//the top level component would only have to pull the message from the backend and then it would need to get to the page somehow. The text box for entering the message for the top level is a permanent fixture at the top of a messaging section.

    return (
        <div>
            <div className="row commentsTopLevelRowMessage">
                <div className="col-xs-12">
                    <ul className="media-list">
                        <li className="media">
                            <div className="media-left">
                                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                            </div>
                            <div className="media-body">
                            <h4 className="media-heading messageUserName">{this.props.firstName}        {this.props.lastName}</h4>
                                <div className="row">
                                    <div className="col-xs-12 messageText">
                                        <span className="messageContent">{this.props.body}</span>
                                        <br/>
                                    
                                        
                                    </div>

                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default CommentsTopLevel;

                                    // <div className="col-xs-2 messageEditIcon">
                                    //     <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                    // </div>

                                        // <a className="messageTopEditLink" onClick={() => browserHistory.push('/editMessage/')}>Edit</a> | <a className="messageTopDeleteLink" onClick={() => this.props.deleteMessages(this.props.id)}>Delete</a> 