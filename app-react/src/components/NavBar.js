import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class NavBar
 extends Component {
  render() {

    //   Need to add route for editing/deleting profile.

    return (
        <div className="headerArea">
            <header>
                <nav>
                    <div className="nav navbar-nav navbar-right">
                        <a className="nav-item projectNav" onClick={() => browserHistory.push('/shoot/:projectId')}>
                            Project Shoot List
                        </a>

                        <a className="nav-item homeNav" onClick={() => browserHistory.push('/projects')}>
                            Home
                        </a>
                        <a className="nav-item signOutNav" onClick={() => browserHistory.push('/')}>
                            Sign Out
                        </a>
                        <a className="nav-item editProfileNav" onClick={() => browserHistory.push('/signin')}>
                            Edit Profile
                        </a>
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