import React from 'react';
import { browserHistory } from 'react-router'

class Project extends React.Component{
    toggleCompleted(e) {
        if (e.target.checked === true) {
            fetch('/api/projects/' + this.props.id + '/complete')
             // tell back-end that it's completed
             browserHistory.push('/completedProjects')
        }
        else {
            fetch('/api/projects/' + this.props.id + '/incomplete') // tell back-end that it's incompleted
            .then(this.props.getProjects)
        }
    }

    render(){
        return <div className="col-sm-6">
                <div className="panel panel-info">
                    <div className="panel-heading">
                          <div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" onChange={this.toggleCompleted} />
                                     &nbsp; Check if project is done
                                </label>
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
                    <button type="button" className="btn btn-primary col-sm-offset-1" onClick={() => browserHistory.push('/projects/' + this.props.id + '/edit')}>Edit </button>
                    <button type="button" className="btn btn-danger col-sm-offset-1" onClick={() => this.props.deleteProject(this.props.id)}>Delete </button>
                    <button type="button" className="btn btn-success col-sm-offset-1" onClick={() => browserHistory.push('/invite/' + this.props.id)}>Invite</button>
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

