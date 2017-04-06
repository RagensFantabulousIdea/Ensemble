import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Project from './Project'
class UserProjects extends Component {

 constructor(props){
            super(props)                            // super is required here
            this.getProject=this.getProject.bind(this)   
            this.addProject=this.addProject.bind(this)
            this.state = {                        // state of the page                     
            projects: []                              //start with empty state  
            }
            }                                            

        //LifeCycles Methods                                             
        componentWillMount(){ 
        this.getProject()                 // put the data into it and change the state
    }
        //API Methods
        getProject(){
            fetch('/api/v1/')
                .then (response => response.json())
                .then(projects => this.setState({projects:projects}))
            }
                addProject(){   // I don't know what to pass here
                this.getProject()
            }

render() {
    let projects = this.state.projects.map((project, key) => <project key={key} index={key} {...project}/>)
    return (

    <div>
       <div className="text-center">
        <button type="button" className="btn btn-primary createproject" onClick={() => browserHistory.push('/CreateProject')}>Create Projects</button><hr/>
     </div>

     <Project/>

    <div className="col-sm-6 rightcolumn">
    <h3><center>The Projects for which I have to collaborate</center></h3>

        <div className="col-sm-6">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="title">This is the Title</h3>
                    </div>
                    <p id="carditems">Author</p><hr/>
                    <p id="carditems">Project#</p><hr/>
            <div className="panel-body">
                <p className="body">Here is the description</p>
                <div className="panel-footer">
                 <button type="button" className="btn btn-primary col-sm-offset-1" onClick={() => browserHistory.push('/CreateProject')}>Edit </button>
                <button type="button" className="btn btn-success col-sm-offset-5" onClick={() => browserHistory.push('/Invite')}>Invite</button>
                    </div>
                </div>
            </div>
        </div>

     <div className="col-sm-6">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="title">This is the Title</h3>
                </div>
                <p id="carditems">Author</p><hr/>
                <p id="carditems">Project#</p><hr/>
            <div className="panel-body">
                <p className="body">Here is the description</p>
                </div>
            <div className="panel-footer">
                 <button type="button" className="btn btn-primary col-sm-offset-1" onClick={() => browserHistory.push('/CreateProject')}>Edit </button>
                <button type="button" className="btn btn-success col-sm-offset-5" onClick={() => browserHistory.push('/Invite')}>Invite</button>
                </div>
            </div>
        </div>
    </div>
</div>

  
      
    
    );
  }
}

export default UserProjects;
            