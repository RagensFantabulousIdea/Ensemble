import React, { Component } from 'react';
// import { browserHistory } from 'react-router';
// import SignUp from './SignUp'
// import Signin from './Signin'
import FooterArea from './FooterArea'
import Signup from './SignUp'
import SignIn from './SignIn'


// need to add footer
class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalSi: "none",
      modalSu: "none",
   
    }
  }

  render() {
    // let SignUp = this.state.SignUp.map((SignUp, key) => <SignUp {...SignUp} key={key} showModal={this.showModal}/>)
    return (
      <div>
        <div className="welcome">
          <header>
            <span className="appName">LensFlare</span> <br/>
            <span className="appTagLine">Photo Shoot Management</span>
          </header>

          <div className="welcomeButtons text-center">
            <button type="button" className="btn signInButtonWelcome" onClick={() => this.setState({modalSi: 'block'})} >Sign In</button> <br/>
            <button type="button" className="btn signUpButtonWelcome" onClick={() => this.setState({modalSu: 'block'})}>Sign Up</button>
          </div>
        </div>
          
          <div className="row body">
            <div className="col-sm-6 col-md-4">
              <p className="centralData">Enter your photo shoot data in one location, including: asset descriptions, sample images, date and time of shoot, and more!</p>
            </div>
            
            <div className="col-sm-6 col-md-4">
              <p className="collaborating">Invite partners into your project to collaborate with them during all stages of the shoot process through the easy-to-use forms and in-app messaging system that can be accessed on mobile, tablet, or desktop devices.</p>
            </div>
            
            <div className="col-sm-6 col-md-4">
              <p className="makingSelections">Upload jpeg images, discuss results, and record the final selection in one location.</p>
            </div>
          </div>


      




        <FooterArea />

        <Signup modalSu={this.state.modalSu}  className="modal"/>
        <SignIn modalSi={this.state.modalSi}  className="modal"/>

      </div>
    );
  }
}

       
export default Welcome;


// onClick={() => browserHistory.push('/Signin')}