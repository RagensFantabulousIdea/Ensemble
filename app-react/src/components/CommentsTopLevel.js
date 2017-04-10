import React, { Component } from 'react';

class CommentsTopLevel
 extends Component {
  render() {

//the top level component would only have to pull the message from the backend and then it would need to get to the page somehow. The text box for entering the message for the top level is a permanent fixture at the top of a messaging section.

    return (
        <div className="row commentsTopLevelRowMessage">
            <div className="col-xs-12 messageText">
                <span className="messageUserName">Whitney Havice</span>  <span className="messageContent">I think we need to make sure that the right shoulder is higher.</span>
                <div className="messageTopReplyLink">
                    <a>Reply</a><br/>
                </div>
            </div>
        </div>
    );
  }
}

export default CommentsTopLevel;