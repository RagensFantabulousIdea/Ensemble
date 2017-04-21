import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Project from './Project';
import UserNavBar from './UserNavBar';
import FooterArea from './FooterArea';

class UserProjects extends Component {

    constructor(props){
        super(props)                                // super is required here
        this.getProjects = this.getProjects.bind(this)
        this.returnToSignin = this.returnToSignin.bind(this)
        this.deleteProject = this.deleteProject.bind(this) 
        this.removeMember = this.removeMember.bind(this) 
        // this.toggleProjectComplete = this.toggleProjectComplete.bind(this)
        this.state = {                                // state of the page                     
            projects: []                              //start with empty state  
        }
    }

    //LifeCycles Methods                                             
    componentWillMount(){ 
        this.getProjects()                 // put the data into it and change the state
    }

    componentWillReceiveProps() {
        this.getProjects()
    }

    //API Methods
    getProjects(){
        fetch('/api/projects?complete=' + (location.href.includes('/complete') ? 'true' : 'false') + '&token=' + sessionStorage.getItem('token'))
            .then(response => response.json())
            .then(projects => {
                this.setState({projects: projects})
            })
    }
    // functionality for signout
    returnToSignin() {
        if (sessionStorage.length > 0) {
            sessionStorage.clear()
            browserHistory.push('/signin')
        }
    }

    deleteProject(id) {
        fetch('/api/projects/' + id + '?token='+ sessionStorage.getItem('token'), {method: 'DELETE'})
            .then(response => {
                this.getProjects()
            })
    }

    removeMember(id) {
        fetch('/api/projects/' + id + '/memberships/remove?token='+ sessionStorage.getItem('token'), {method: 'DELETE'})
            .then(response => {
                this.getProjects()
            })
    }

    render() {
        let projects = this.state.projects.map((project, key) => <Project key={Date.now() + key} index={key} {...project} getProjects={this.getProjects} deleteProject={this.deleteProject} removeMember={this.removeMember} returnToSignin={this.returnToSignin}/>)

        if (projects.length === 0) {
            projects = <div><br/><br/><h4 className="text-center cardAddInstruction">Please click the "Add New Project" button to get started.</h4></div>
        }
       
        return (
            <div className="userProjectsPage">
                <UserNavBar id={sessionStorage.getItem('userId')} />
            
                 <h1 className="userHomeTitle">{location.href.includes('/complete') ? 'Completed Projects' : 'Projects'}</h1>
                <div className="container">
                    {location.href.includes('/complete') ? '' : <div className="row">
                        <div className="col-sm-12">
                            <button type="button" className="btn addButton pull-right" onClick={() => browserHistory.push('/projects/new')}>Add New Project</button>
                        </div>
                    </div>}
                
                    <div className="row">
                        {projects}
                    </div>   
                </div>

                <FooterArea />
            </div>
        );
    }
}

export default UserProjects;
//    {this.owner.id == sessionStorage.getItem('userId') ?
//             <h1 className="userHomeTitle">Projects</h1> :  <h1 className="userHomeTitle">Completed Projects</h1>}

        // <h1 className="userHomeTitle">Projects</h1>
//    {this.owner.id == sessionStorage.getItem('userId') ?
//             <h1 className="userHomeTitle">Projects</h1> :  <h1 className="userHomeTitle">Completed Projects</h1>}
 
// <Project id={1} title="Test Project 1" author="Manpreet" projectNumber="127837482378" description="This is just a test project, so ignore it." />
//                             <Project id={2} title="Test Project 2" author="Collin" projectNumber="39439jds" description="This is just a test project, so ignore it." />

 // let projects = this.state.projects.map((project, key) => <Project key={key} index={key} {...project} deleteProject={this.deleteProject} toggleProjectComplete={this.toggleProjectComplete}/>)


//  <button type="button" className="btn btn-warning" onClick={() => browserHistory.push('/projects')}>Incompleted Projects</button> &nbsp;

// <button type="button" className="btn btn-primary" onClick={() => browserHistory.push('/projects/complete')}>Completed Projects</button>

// <span id="logout" className="glyphicon glyphicon-off" onClick={this.returnToSignin}></span>

// <hr/>

//  <span className="glyphicon glyphicon-off logout" onClick={this.returnToSignin}></span>