import React, { Component } from 'react';

class CommentsNested
 extends Component {
  render() {

      //would need to set up some kind of if/else thingie . . . if there isn't a nested comment, show nothing, if the reply button under the commentsTopLevel is clicked, show the text box (is this the right component for the reply text box to live? is this the right place for the reply link?), when message added, remove text box and show message.

    return (
        <div>
            <div className="row commentsNestedRowTextbox">
                <div className="col-xs-11 col-xs-offset-1 messageReplyTextBox">
                    <div className="input-group">
                        <input type="text" className="form-control"/>
                        <span className="input-group-btn">
                        <button className="btn btn-success messagePost" type="button">Post</button>
                        </span>
                    </div>
                </div>
            </div>

            <div className="row commentsNestedRowMessage">
                <div className="col-xs-11 col-xs-offset-1 messageReplyText">
                    <span className="messageUserName">Derek Campbell</span> <span className="messageContent">Sounds good to me!</span>    
                    <div className="messageNestedReplyLink">
                        <a>Reply</a><br/>
                    </div>               
                </div>
            </div>
        </div>
    );
  }
}

export default CommentsNested;