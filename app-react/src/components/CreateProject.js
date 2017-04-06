import React, { Component } from 'react';
import { browserHistory } from 'react-router';
// import SignUp from './SignUp'
class createproject extends Component {
      constructor(props){
        super(props)
            this.state = {
            title: '',
            author: '',
            projectNumber: '',
            description: '',
            getProject: props.getProjects
          }
        }

        addProject(getProject){                    
        //Post to /api/v1/projects
        if (this.state.title !== '' && this.state.author !== ''&& this.state.projectNumber !== ''&& this.state.description !== ''){
        fetch('/api/v1/?', {
            method: 'Post',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                author: this.state.author,
                projectNumber: this.state.projectNumber,
                description: this.state.description,
            })
        })
        .then(response => response.json())
        .then(response => {
             //clear the form fields
            this.setState({
              title: '',
              author: '',
              projectNumber: '',
              description: '',
            })
        //Reload Lists
        this.state.getProjects(response)
      })
       browserHistory.push('/UserProjects')
        }
    }

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

// <button className="btn btn-default" type="button" onClick={() => this.addProject(this.props.getProjects)}>Add Todo</button>
            