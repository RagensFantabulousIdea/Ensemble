import React, { Component } from 'react';


class CommentsTitleBox extends Component {
  render() {

    return (
      <div>
        <div className="col-xs-12 commentsTopLevelCol">
        <h4>Messages</h4>
          <div className="input-group">
            <input type="text" className="form-control"/>
              <span className="input-group-btn">
                <button className="btn btn-success messagePost" type="button">Post</button>
              </span>
          </div>
          <br/>
        </div>
      </div>
    );
  }
}

export default CommentsTitleBox;