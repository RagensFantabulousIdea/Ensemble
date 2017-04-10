import React, { Component } from 'react';
import { browserHistory } from 'react-router';
// import SignUp from './SignUp'
// import Signin from './Signin'

// need to add footer
class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="welcome">
          <header>
            <span className="appName">Ensemble</span> <br/>
            <span className="appTagLine">Photo Shoot Management</span>
          </header>

          <div className="welcomeButtons text-center">
            <button type="button" className="btn signInButtonWelcome" onClick={() => browserHistory.push('/Signin')}>Sign In</button> <br/>
            <button type="button" className="btn signUpButtonWelcome" onClick={() => browserHistory.push('/SignUp')}>Sign Up</button>
          </div>
        </div>

        
          <div className="row body">
            <div className="col-sm-6 col-md-4">
              <p className="centralData">Enter all of your photo shoot data into one centralized location, including: photo descriptions, sample images, date and time of shoot, and more!</p>
            </div>
            
            <div className="col-sm-6 col-md-4">
              <p className="collaborating">Invite partners into your photo shoot project to collaborate with them during all stages of the shoot process through the easy-to-use forms and in-app messaging system.</p>
            </div>
            
            <div className="col-sm-6 col-md-4">
              <p className="makingSelections">Upload multiple images at a time, note accepted photos with one-click, and record the final selections in one location.</p>
            </div>
          </div>
      



      </div>
    );
  }
}

        // <div className="text-center">
        //   <button id="actionButton" type="button" className="btn btn-lg btn-success" onClick={() => browserHistory.push('/Projects')}>User Projects</button>
        // </div>

export default Welcome;
