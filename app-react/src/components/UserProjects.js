import React, { Component } from 'react';
import { browserHistory } from 'react-router';
// import SignUp from './SignUp'



class UserProjects extends Component {
  render() {
    return (

    <div>
       <div className="text-center">
        <button type="button" className="btn btn-primary createproject" onClick={() => browserHistory.push('/CreateProject')}>Create Projects</button><hr/>
     </div>
    <div className="col-sm-6 leftcolumn">
    <h3><center>My Projects</center></h3>

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


   <div className="col-sm-6 rightcolumn">
    <h3><center>My Projects</center></h3>

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
</div>
</div>

  
      
    
    );
  }
}

export default UserProjects;
            