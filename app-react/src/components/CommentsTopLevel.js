import React, { Component } from 'react';

class CommentsTopLevel extends Component {
  render() {

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
                            <h4 className="media-heading messageUserName">Whitney Havice</h4>
                                <div className="row">
                                    <div className="col-xs-12 messageText">
                                        <span className="messageContent">I think we need to make sure that the right shoulder is higher. The sample is good except for this one problem. If this guy tried to swing, he'd break his arm!</span>
                                        <br/>
                                        <a className="messageTopEditLink">Edit</a> | <a className="messageTopDeleteLink">Delete</a> | <a className="messageTopReplyLink">Reply</a><br/>
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