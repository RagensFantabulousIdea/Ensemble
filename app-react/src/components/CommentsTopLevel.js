import React, { Component } from 'react';

// import { browserHistory } from 'react-router';

class CommentsTopLevel extends Component {
    constructor(props) {
        super(props)
        this.deleteMessages = this.deleteMessages.bind(this)
    }
    componentDidMount(){
        console.log(this.props)
    }

    deleteMessages(id) {
          // console.log(this.props);
        fetch('/api/projects/' + this.props.projectId + '/assets/' + this.props.assetId + '/comments/' + this.props.commentId + '?token=' + sessionStorage.getItem('token'), {method: 'DELETE'})
            .then(response => {window.location.reload();})
    }
  render() {
    //   console.log(this.props)

//the top level component would only have to pull the message from the backend and then it would need to get to the page somehow. The text box for entering the message for the top level is a permanent fixture at the top of a messaging section.

    return (
        <div>
            <div className="row commentsTopLevelRowMessage">
                <div className="col-xs-12">
                    <ul className="media-list">
                        <li className="media">
                            <div className="media-left">
                                <span className="glyphicon glyphicon-user userCommentIcon" aria-hidden="true"></span>
                            </div>
                            <div className="media-body">
                            <h4 className="media-heading messageUserName">{this.props.firstName}        {this.props.lastName}</h4>
                                <div className="row">
                                    <div className="col-xs-12 messageText">
                                        <span className="messageContent">{this.props.body}</span>
                                        <br/>
                                        <a className="messageTopDeleteLink" onClick={() => this.deleteMessages(this.props.projectId)}>Delete</a>                                         
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