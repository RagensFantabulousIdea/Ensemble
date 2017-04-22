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
        <div>
        <div className="userHeaderArea">
        </div>
         
             <ul className="nav nav-pills">
                <nav>
                    <div className="nav navbar-nav navbar-right">

                     <li role="presentation">
                        <Link className="nav-item homeNav" onClick={() => browserHistory.push('/projects')}>
                            Projects Home
                        </Link>
                        </li>


                        <li role="presentation">
                        <Link className="nav-item projectNav" onClick={() => browserHistory.push('/projects/complete')}>
                            Completed Projects
                        </Link>
                        </li>

                         <li role="presentation">
                        <Link className="nav-item editNav" onClick={() => browserHistory.push('/edituser/' +sessionStorage.getItem('userId'))}>
                            Edit User Information
                        </Link>
                        </li>

                       
                        
                        <li role="presentation" className="pull-right">
                        <Link className="nav-item signOut" onClick={this.returnToSignin}>
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

export default UserNavBar;


//                     <ul class="nav nav-pills">
//   <li role="presentation" class="active"><a href="#">Home</a></li>
//   <li role="presentation"><a href="#">Profile</a></li>
//   <li role="presentation"><a href="#">Messages</a></li>
// </ul>