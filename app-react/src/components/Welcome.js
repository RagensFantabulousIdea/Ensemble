import React, { Component } from 'react';
import { browserHistory } from 'react-router';
// import SignUp from './SignUp'
// import Signin from './Signin'
import FooterArea from './FooterArea'

// need to add footer
class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="welcome">
          <header>
            <span className="appName">LensFlare</span> <br/>
            <span className="appTagLine">Photo Shoot Management</span>
          </header>

          <div className="welcomeButtons text-center">
            <button type="button" className="btn signInButtonWelcome" onClick={() => browserHistory.push('/Signin')}>Sign In</button> <br/>
            <button type="button" className="btn signUpButtonWelcome" onClick={() => browserHistory.push('/SignUp')}>Sign Up</button>
          </div>
        </div>

        
          <div className="row body">
            <div className="col-sm-6 col-md-4">
              <p className="centralData">Enter all of your photo shoot data into one location, including: photo descriptions, sample images, date and time of shoot, and more!</p>
            </div>
            
            <div className="col-sm-6 col-md-4">
              <p className="collaborating">Invite partners into your project to collaborate with them during all stages of the shoot process through the easy-to-use forms and in-app messaging system.</p>
            </div>
            
            <div className="col-sm-6 col-md-4">
              <p className="makingSelections">Upload jpeg images, note accepted photos, and record the final selections in one location.</p>
            </div>
          </div>


      




        <FooterArea />

      </div>
    );
  }
}

       
export default Welcome;
