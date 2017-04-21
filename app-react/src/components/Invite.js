import React, { Component } from 'react';
import UserNavBar from './UserNavBar';
import FooterArea from './FooterArea';
import { browserHistory } from 'react-router';
// import SignUp from './SignUp'



class Invite extends Component {
    constructor(props){
        super(props)
            this.state = {
            firstname: '',
            lastname: '',
            email: '',
            projects: '',
            project_token: ''
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
             //console.log('boo')
        alert("Invitation sent")
        browserHistory.push('/projects')
    }
    
        invitePeople(){                    
        //Post to /api/v1/projects
        if (this.state.firstname !== '' && this.state.lastname !== ''&& this.state.email !== '')
        {
           
        fetch('/api/projects/' + this.state.projects.project_token + '/invitations', {
            method: 'Post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email
            })
        })
        .then(function(response) {    
                return response.json();
            })
            
        .then(() =>this.sentinvite())
        // .then (response => console.log(this.state))

    }
}    

render() {
    
    // alert('Invite someone to project ' + this.props.params.projectId)
    return (
        <div className="inviteCard">
            <UserNavBar />
            <h1>Invitation Form</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                        <div className="panel invitePanel">
                            <div className="panel-heading"></div>
                            <div className="panel-body">
                                <p className="inviteInstructions">Fill out this form with the information for the person you are inviting to your project.</p>
                                <div className="form-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" className="form-control" value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" className="form-control" value={this.state.lastname} onChange={(e) => this.setState({ lastname: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className="form-control email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} required />
                                </div>
                                <div className="inviteSendButton">
                                    <button type="button" className="btn projectButton" onClick={() => this.invitePeople()}> Invite </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterArea />
        </div>
    );
  }
}

export default Invite;
            