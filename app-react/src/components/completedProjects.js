import React from 'react';
// import { browserHistory } from 'react-router'

class completedProjects extends React.Component{
    render(){
        return (
            <div>
             <div className="row">
                    <div className="col-sm-6 leftcolumn">
                        <h3><center>My Projects</center></h3>
                        <div className="row">

                        

                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default completedProjects;



// <div className="checkbox">
//                         <label className={this.props.completed === 'yes' ? 'done' : ''}>
//                             <input type="checkbox" checked={this.props.completed === 'yes' ? true : false} onChange={(e) => this.props.toggleComplete(this.props.id, e.target.checked)} />
//                             {this.props.todo}
//                         </label>
//                     </div>

