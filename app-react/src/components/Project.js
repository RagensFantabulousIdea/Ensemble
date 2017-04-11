import React from 'react';
import { browserHistory } from 'react-router'

class Project extends React.Component{
    constructor(props) {
        super(props)
        this.state={
                completed: false
        }
    }

    componentDidMount(){
        console.log(this.props.id)
    }
    toggleCompleted() {
        if (this.state.completed === false) {
            this.setState({completed: true})
            console.log('yay')
            var token = sessionStorage.getItem('token');
            fetch('/api/projects/' + this.props.id + '?token=' + token, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                complete: this.state.completed
                // complete:
                // email: email,
                // password: password
            })
        })
        // .then(whatever => console.log('yay'))
             // tell back-end that it's completed
            //  browserHistory.push('/completedProjects')
        }
        else {
            this.setState({completed: false})
            // fetch('/api/projects/' + this.props.id + '/incomplete') // tell back-end that it's incompleted
            // .then(this.props.getProjects)
        }
    }

    render(){
        return <div className="col-sm-6">
                <div className="panel panel-info">
                    <div className="panel-heading">
                          <div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" checked={this.state.completed} onClick={() => this.toggleCompleted()}/>
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
                    <button type="button" className="btn btn-primary col-sm-offset-1" onClick={() => browserHistory.push('/edit/' + this.props.id)}>Edit </button>
                    <button type="button" className="btn btn-danger col-sm-offset-1" onClick={() => this.props.deleteProject(this.props.id)}>Delete </button>
                    <button type="button" className="btn btn-success col-sm-offset-1" onClick={() => browserHistory.push('/invite/' + this.props.id)}>Invite</button>
                </div>
            </div>
        </div>
    }
}

export default Project;

// {this.state.completed ? 'true' : 'false'}

// <div className="checkbox">
//                         <label className={this.props.completed === 'yes' ? 'done' : ''}>
//                             <input type="checkbox" checked={this.props.completed === 'yes' ? true : false} onChange={(e) => this.props.toggleComplete(this.props.id, e.target.checked)} />
//                             {this.props.todo}
//                         </label>
//                     </div>

