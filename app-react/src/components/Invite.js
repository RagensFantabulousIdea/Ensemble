import React, { Component } from 'react';
import { browserHistory } from 'react-router';
// import SignUp from './SignUp'



class Invite extends Component {
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
            <button type="button" className="btn btn-success " onClick={() => browserHistory.push('/UserProjects')}>Send</button>
                    </div>
                </div>
            </div>
        </div>
     
    
    );
  }
}

export default Invite;
            