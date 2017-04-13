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
                <div className="col-xs-11 col-xs-offset-1">
                    <ul className="media-list">
                        <li className="media">
                            <div className="media-left">
                                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                            </div>
                            <div className="media-body">
                            <h4 className="media-heading messageUserName">Derek Campbell</h4>
                                <div className="row">
                                    <div className="col-xs-12 messageText">
                                        <span className="messageContent">Sounds good to me!</span>
                                        <br/>
                                        <a className="messageNestedEditLink">Edit</a> | <a className="messageNestedDeleteLink">Delete</a> | <a className="messageNestedReplyLink">Reply</a><br/>
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

export default CommentsNested;