import React from 'react';
import { browserHistory } from 'react-router'

class Project extends React.Component{
    constructor(props) {
        super(props)
        this.toggleCompleted = this.toggleCompleted.bind(this)

        this.state = {
            complete: props.complete
        }
    }
    toggleCompleted() {
        // moved variable out of if and else so that it is available to both of them without being repeated
        var token = sessionStorage.getItem('token');
        if (this.state.complete === false) {
            // var token = sessionStorage.getItem('token');
            // tell back-end that it's completed
            fetch('/api/projects/' + this.props.id + '?token=' + token, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    complete: true
                })
            })
            .then(response => {
                this.props.getProjects()
            })
        }
        else {
            // var token = sessionStorage.getItem('token');
            // tell back-end that it's completed
            fetch('/api/projects/' + this.props.id + '?token=' + token, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    complete: false
                })
            })
            .then(response => {
                this.props.getProjects()
            })
        }
    }

    render(){
        return <div className="col-sm-6 projectCard">
                <div className="panel panel-info">
                    <div className="panel-heading">
                          <div className="form-check">
                                {this.props.owner.id == sessionStorage.getItem('userId') ?
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" checked={this.state.complete} onChange={this.toggleCompleted}/>
                                        &nbsp; Check if project is done
                                </label> : ''}
                                {this.props.owner.id == sessionStorage.getItem('userId') ? <span className="pull-right label label-warning">You Are The Owner</span> : <span className="pull-right label label-danger">Collaboration</span>}
                            </div>
                            <h3 className="title">{this.props.title}</h3>
                        </div>
                            <p id="carditems">{this.props.author}</p><hr/>
                            <div>
                            <p id="carditems">{this.props.project_num}</p><hr/>
                            </div>
                    <div className="panel-body">
                        <p>{this.props.description}</p>
                    </div>
                <div className="panel-footer">

                <div className="form-group">
                    <select className="form-control">
                        <option value="">Select category...</option>
                        <option value="edit" onSelect={() => browserHistory.push('/edit/' + this.props.id)}>Edit</option>
                        <option value="home">Delete</option>
                        <option value="school">Invite</option>
                        <option value="work">Project Shoot List</option>
                    </select>
            </div>
                 <button type="button" className="btn btn-primary col-sm-offset-1" onClick={() => browserHistory.push('/edit/' + this.props.id)}>Edit </button>
                    <button type="button" className="btn btn-danger col-sm-offset-1" onClick={() => this.props.deleteProject(this.props.id)}>Delete </button>
                    <button type="button" className="btn btn-success col-sm-offset-1" onClick={() => browserHistory.push('/invite/' + this.props.id)}>Invite</button>
                    <button type="button" className="btn btn-success col-sm-offset-1" onClick={() => browserHistory.push('/shoot/' + this.props.id)}>Project Shoot List</button>
                    
                </div>
            </div>
        </div>
    }
}

export default Project;

// <div className="checkbox">
//                         <label className={this.props.completed === 'yes' ? 'done' : ''}>
//                             <input type="checkbox" checked={this.props.completed === 'yes' ? true : false} onChange={(e) => this.props.toggleComplete(this.props.id, e.target.checked)} />
//                             {this.props.todo}
//                         </label>
//                     </div>

