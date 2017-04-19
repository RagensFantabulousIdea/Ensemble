import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';

class UserNavBar extends Component {
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
        <div className="userHeaderArea">
            <header>
                <nav>
                    <div className="nav navbar-nav navbar-left">
                    
                    </div>
                    <div className="nav navbar-nav navbar-right">
                        <Link className="nav-item projectNav" onClick={() => browserHistory.push('/projects/complete')}>
                            Completed Projects
                        </Link>
                        <Link className="nav-item signOutNav" onClick={() => browserHistory.push('/projects')}>
                            Home
                        </Link>
                        <Link className="nav-item signOutNav" onClick={this.returnToSignin}>
                            Sign Out
                        </Link>
                        <Link className="nav-item signOutNav" onClick={() => browserHistory.push('/edituser/' +sessionStorage.getItem('userId'))}>
                            Edit User Information
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    );
  }
}

export default UserNavBar;


                        // <Link className="nav-item editProfileNav" onClick={() => browserHistory.push('/signin')}>
                        //     Edit Profile
                        // </Link>