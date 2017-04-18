import React, { Component } from 'react';
import CommentsTopLevel from './CommentsTopLevel';
import ProjectPhotoCollaborating from './ProjectPhotoCollaborating';
import { browserHistory } from 'react-router';

class EditMessage extends Component {
constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this)
            this.state = {          
            body: '',
            messages: []
          }
  }

  componentWillMount(){
    fetch('/api/projects/' + this.props.projectId + '/assets/' + this.props.assets + '?token=' + sessionStorage.getItem('token'))
                .then (response => response.json())
                .then(response => this.setState({
                    body:response.body,
                    messages:response.comments
                }))
                .then(blah => console.log(this.state.messages))
    // console.log(this.props)
  }

    onClick(body){  
       fetch('/api/projects/' + this.props.params.projectId + '/assets/' + this.props.assets + '/comments?token=' + sessionStorage.getItem('token'), { 
           method: 'PATCH',
              headers:{
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({
              //left hand side is handled by back-end
                body: this.state.body
              })

        })
        .then(response => response.json())
        .then(response => this.getMessages())
        .then(blah => {
             //clear the form fields
            this.setState({
                body: '',
            })
            browserHistory.push('/shoot/:projectId/assets/:assetId/collaborate')
        })
    }
 
  render() {
let Comments = this.state.messages.map((message, key) => <CommentsTopLevel body={message.body} firstName={message.user.first_name} lastName={message.user.last_name} key={key}/>)

    return (
      <div>
        <div className="row">
          <div className="col-xs-12 commentsTopLevelCol">
          <h4>Messages</h4>
            <div className="input-group">            
                  <input type="text" className="form-control" value ={this.state.body} onChange={(e) => this.setState({body: e.target.value})} />
                    <span className="input-group-btn">
                      <button className="btn messagePost" type="button" onClick={() => this.onClick()}>Post</button>
                    </span>
            </div>
            <br/>
          </div>
         {Comments}
        </div>
      </div>
      
    );
  }
}

export default EditMessage;


  