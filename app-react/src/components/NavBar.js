import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

class NavBar extends Component {

    constructor(props){
        super(props)
        this.returnToSignin = this.returnToSignin.bind(this)
    }

    returnToSignin() {
        if (sessionStorage.length > 0) {
            sessionStorage.clear()
            browserHistory.push('/')
        }
    }

  render() {
console.log
    //   Need to add route for editing/deleting profile.

    return (
        <div>
        <div className="headerArea">
            </div>
            <ul className="nav nav-pills">
                <nav>
                    <div className="nav navbar-nav navbar-right">

                    <li role="presentation">
                        <Link className="nav-item homeNav" onClick={() => browserHistory.push('/projects')}>
                            Projects Home
                        </Link>
                        </li>

                    <li role="presentation" className="active">
                        <Link className="nav-item projectNav" onClick={() => browserHistory.push('/shoot/' + this.props.params.projectId)}>
                            Project Shoot List
                        </Link>
                        </li>

                        

                         <li role="presentation">
                        <Link className="nav-item signOutNav" onClick={() => browserHistory.push('/edituser/'+ this.props.id)}>
                            Edit User Information
                        </Link>
                        </li>

                    
                        <li role="presentation" className="pull-right">
                            <Link className="nav-item signOutNav" onClick={this.returnToSignin}>
                                         Sign Out
                        </Link>
                                 </li>
                            
                     
                 

                       
                       
                    </div>
                </nav>
                 </ul>
     
        </div>
    );
  }
}

export default NavBar;

// <ul class="nav nav-pills">
//   <li role="presentation" class="active"><a href="#">Home</a></li>
//   <li role="presentation"><a href="#">Profile</a></li>
//   <li role="presentation"><a href="#">Messages</a></li>
// </ul>


// <div className="nav navbar-nav navbar-left">
//                         <a className="nav-item projectNav" onClick={() => browserHistory.push('/projects')}>
//                             Project
//                         </a>
//                         <a className="nav-item extraPhotosNav" onClick={() => browserHistory.push('/projects')}>
//                             Extra Photos
//                         </a>
//                         <a className="nav-item allPhotosNav" onClick={() => browserHistory.push('/projects')}>
//                             All Photos
//                         </a>
//                     </div>

                        // <a className="nav-item editProfileNav" onClick={() => browserHistory.push('/signin')}>
                        //     Edit Profile
                        // </a>