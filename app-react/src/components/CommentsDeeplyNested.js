import React, { Component } from 'react';

class CommentsDeeplyNested
 extends Component {
  render() {

      //would need to set up some kind of if/else thingie . . . if there isn't a nested comment, show nothing, if the reply button under the commentsTopLevel is clicked, show the text box (is this the right component for the reply text box to live? is this the right place for the reply link?), when message added, remove text box and show message.

    return (
        <div>
            <div className="row commentsDeeplyNestedRowTextbox">
                <div className="col-xs-10 col-xs-offset-2 messageReplyTextBox">
                    <div className="input-group">
                      <input type="text" className="form-control"/>
                      <span className="input-group-btn">
                        <button className="btn btn-success messagePost" type="button">Post</button>
                      </span>
                    </div>
                </div>
            </div>

            <div className="row commentsNestedRowMessage">
                <div className="col-xs-10 col-xs-offset-2 messageReplyText">
                    <span className="messageUserName">Whitney Havice</span> <span className="messageContent">Thanks, we'll plan on that, then.</span>    
                    <div className="messageDeeplyNestedReplyLink">
                        <a>Reply</a><br/>
                    </div>               
                </div>
            </div>

        </div>
    );
  }
}

export default CommentsDeeplyNested;