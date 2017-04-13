import React, { Component } from 'react';
import { browserHistory } from 'react-router';
// import SignUp from './SignUp'



class Invite extends Component {
    constructor(props){
        super(props)
            this.state = {
            // firstname: '',
            // lastname: '',
            email: '',
            projects: ''
          }
        }

        componentWillMount(){
        fetch('/api/projects/' + this.props.params.projectId + '?token=' + sessionStorage.getItem('token'))
            .then (response => response.json())
            .then(projects => this.setState({
                projects: projects
            }))
            .then (whatever => console.log(this.state.projects))
    }

         sentinvite(){
             console.log('boo')
        alert("Invitation sent")
        browserHistory.push('/projects')
    }
    
        invitePeople(){                    
        //Post to /api/v1/projects
        if (this.state.firstname !== '' && this.state.lastname !== ''&& this.state.email !== '')
        {
           
        fetch('/api/projects/' + this.state.projects.token + '/invitations', {
            method: 'Post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // firstname: this.state.firstname,
                // lastname: this.state.lastname,
                email: this.state.email
            })
        })
        .then(function(response) {
                return response.json();
            })
        .then(() =>this.sentinvite())

    }
}    

render() {
    // alert('Invite someone to project ' + this.props.params.projectId)
    return (
     <div className="invitetopmargin">
     <div className="col-sm-4 col-sm-offset-4">
        <div className="panel panel-info">
         <div className="panel-heading"><h3>Please fill this form to invite someone </h3></div>
            <div className="panel-body">
                <div className="form-group">
                    <label htmlFor="firstname">First Name(of the person being invited)</label>
                    <input type="text"  className="form-control" value={this.state.firstname} onChange={(e) => this.setState({firstname: e.target.value})}/>
                </div>
            <div className="form-group">
                <label htmlFor="lastname">last Name(of the person being invited)</label>
                <input type="text"  className="form-control" value={this.state.lastname} onChange={(e) => this.setState({lastname: e.target.value})}/>
                </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" className="form-control" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} required />
            </div>
            <button type="button" className="btn btn-success " onClick={() =>this.invitePeople()}>Invite</button>
                    </div>
                </div>
            </div>
        </div>
     
    
    );
  }
}

export default Invite;
            