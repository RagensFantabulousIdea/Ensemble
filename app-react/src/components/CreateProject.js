import React, { Component } from 'react';
import { browserHistory } from 'react-router';
// import SignUp from './SignUp'
class createproject extends Component {
  render() {
    return (
        <div id="createproject">
        <div className="text-center">
        <button type="button" className="btn btn-primary createproject">Create Your Project</button><hr/>
        </div>
            <div className="col-sm-4 col-sm-offset-4">
                <div className="panel panel-default">
                    <div className="panel-body">
            <form>
              <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text"  className="form-control" required/>
                </div>
                  <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" className="form-control" required/>
                </div>
                 <div className="form-group">
                    <label htmlFor="projectnumber">Project Number</label>
                    <input type="text" className="form-control"/>
                </div>
                  <div className="form-group">
                  <label htmlFor="description">Description of project</label>
                   <textarea className="form-control"  placeholder="body" rows="10" required/>
                </div>
                <button type="button" className="btn btn-success " onClick={() => browserHistory.push('/UserProjects')}>Save</button>
            </form>
            </div>
        </div>
    </div>
  </div>
 
     
    
    );
  }
}

export default createproject;
            