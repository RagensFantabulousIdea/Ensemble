import React, { Component } from 'react';
import { browserHistory } from 'react-router';
// import SignUp from './SignUp'



class Invite extends Component {
    constructor(props){
        super(props)
            this.state = {
            firstname: '',
            lastname: '',
            email: '',
          }
        }

        invitePeople(){                    
        //Post to /api/v1/projects
        if (this.state.firstname !== '' && this.state.lastname !== ''&& this.state.email !== '')
        {
        fetch('/api/v1/?', {
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
        }
    }
render() {
    return (
     <div className="invitetopmargin">
     <div className="col-sm-4 col-sm-offset-4">
        <div className="panel panel-info">
         <div className="panel-heading"><h3>Please fill this form to invite someone </h3></div>
            <div className="panel-body">
                <div className="form-group">
                    <label htmlFor="firstname">First Name(of the person being invited)</label>
                    <input type="text"  className="form-control" />
                </div>
            <div className="form-group">
                <label htmlFor="lastname">last Name(of the person being invited)</label>
                <input type="text"  className="form-control" />
                </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" className="form-control"  required />
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
            