import React, { Component } from 'react';
import { browserHistory } from 'react-router';
// import SignUp from './SignUp'
class EditMessage extends Component {
    constructor(props) {
        super(props)
        this.editProject = this.editProject.bind(this)
        this.state = {
            title: '',
            author: '',
            projectNumber: '',
            description: '',
            token: '',
            // getProjects: this.props.getProjects
            projects: null
        }
    }

    componentWillMount(){
        fetch('/api/projects/' + this.props.params.projectId + '?token=' + sessionStorage.getItem('token'))
            .then (response => response.json())
            .then(projects => this.setState({
                projects: projects,
                author: projects.author,
                title: projects.title,
                projectNumber: projects.project_num,
                description: projects.description
            }))
            .then (whatever => console.log(this.state.projects))
    }

    componentWillReceiveProps(){
        this.getAssets()
    }

    editProject(title, author, projectNumber, description,id) {
        // console.log(this.props.params.projectId)
        //Post to /api/projects
        
            var token = sessionStorage.getItem('token');
            fetch('/api/projects/' + this.props.params.projectId + '?token='+ sessionStorage.getItem('token'), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: this.state.title,
                    author: this.state.author,
                    project_num: this.state.projectNumber,
                    description: this.state.description,
                    token: token,
                })
            })
                .then(response => response.json())
                .then(response => {
                    //  clear the form fields
                    this.setState({
                        title: '',
                        author: '',
                        projectNumber: '',
                        description: '',
                    })
                    browserHistory.push('/projects')
                })
          
    }
    render() {
        //console.log(this.props.params.projectId)
        return (
            <div id="createproject">
                <div className="col-sm-4 col-sm-offset-4">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="author">Author</label>
                                    <input type="text" className="form-control" value={this.state.author}
                                    onChange={(e) => this.setState({author: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="projectnumber">Project Number</label>
                                    <input type="text" className="form-control" value={this.state.projectNumber}
                                    onChange={(e) => this.setState({projectNumber: e.target.value})}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description of project</label>
                                    <textarea className="form-control" placeholder="body" rows="10" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
                                </div>
                                <button type="button" className="btn btn-success " onClick={this.editProject}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}
export default EditMessage;

