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

    //   Need to add route for editing/deleting profile.

    return (
        <div className="headerArea">
            <header>
                <nav>
                    <div className="nav navbar-nav navbar-right">
                        <Link className="nav-item projectNav" onClick={() => browserHistory.push('/shoot/' + this.props.params.projectId)}>
                            Project Shoot List
                        </Link>
                        <Link className="nav-item homeNav" onClick={() => browserHistory.push('/projects')}>
                            Home
                        </Link>
                        <Link className="nav-item signOutNav" onClick={this.returnToSignin}>
                            Sign Out
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    );
  }
}

export default NavBar;


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