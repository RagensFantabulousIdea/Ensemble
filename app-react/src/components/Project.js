import React from 'react';
import { browserHistory } from 'react-router'

class Project extends React.Component{
    render(){
        return <div>
      <div className="col-sm-6 leftcolumn">
    <h3><center>My Projects</center></h3>

        <div className="col-sm-6">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="title">{this.props.title}</h3>
                    </div>
                    <p id="carditems">{this.props.author}</p><hr/>
                    <p id="carditems">{this.props.projectNumber}</p><hr/>
            <div className="panel-body">
                <p className="body">{this.props.description}</p>
            </div>
            <div className="panel-footer">
                <button type="button" className="btn btn-primary col-sm-offset-1" onClick={() => browserHistory.push('/projects/' + this.props.index + '/edit')}>Edit </button>
                <button type="button" className="btn btn-success col-sm-offset-5" onClick={() => browserHistory.push('/Invite')}>Invite</button>
            </div>
        </div>
    </div>
</div>
</div>
    }
}

export default Project;

