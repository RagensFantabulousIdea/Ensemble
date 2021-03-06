import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class SignUp extends Component {

    constructor(props) {
        super(props)

        this.signup = this.signup.bind(this)

        this.state= {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            project_token: '',
            modal: "none",
            xmark: "none"
         
        }
    }

     componentWillMount(){
         console.log(this.props.params)
       if(this.props.params !== undefined){
           this.setState({project_token: this.props.params.project_token})
       }

    }

    signup() {
        var firstname = this.state.firstname
        var lastname = this.state.lastname
        var email = this.state.email
        var password = this.state.password
        var project_token = this.state.project_token

        // console.log(firstname,lastname, email, password)

        if (firstname === '' || lastname === '' || email === '' || password === '') {
            alert('You must fill in all fields.')
        }  else if (!email.includes('@') || (email.slice(email.length - 4, email.length - 3) !== '.')) {
            alert('You must enter a valid email address.')
        } 
         else {


        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
//left side is always controled by backend
        body: JSON.stringify({
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: password,
            project_token: project_token
        })
    })
        .then(function(response) {
                console.log('response.json ' + response.json)
                return response.json();
            })
        .then(function(response) {
            console.log('response.project_token ' + response.project_token)

            if (response.project_token) {
                // (console.log('response project_token true ' + response.project_token))
                sessionStorage.setItem('project_token', response.project_token)
                sessionStorage.setItem('userId', response.id)
                sessionStorage.setItem('token', response.token);

                browserHistory.push('/projects')
           } else {
                sessionStorage.setItem('userId', response.id)
                sessionStorage.setItem('token', response.token);

                browserHistory.push('/projects')
                // alert('Signup error: ' + response)
            }
        })
        }
}

                // <i className="fa fa-times-circle-o fa-2x signup-close" aria-hidden="true" onClick={this.props.closeSu} ></i>

render() {
return <div className="modal-fade" style={{display: this.props.modalSu}}>
    <div className="modal-opac">
        <div className="panel modalSu">
            <div className="panel-body">
                <button type="button" className="close signup-close" data-dismiss="modalSu" aria-label="Close" onClick={this.props.closeSu}><span aria-hidden="true">&times;</span></button>
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" className="form-control name" placeholder="First" value={this.state.firstname} onChange={(e) => this.setState({firstname: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" className="form-control name" placeholder="Last" value={this.state.lastname} onChange={(e) => this.setState({lastname: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input type="text" className="form-control email" placeholder="username@example.com" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control password" placeholder="password" maxLength="72" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}  required />
                </div>
            </div>
            <div className="panel-footer text-center">
                <button type="button" className="btn btn-lg actionButton" onClick={this.signup}>Sign Up</button>
            </div>
        </div>
    </div>
    </div>

    }
}

export default SignUp;

    // <i className="fa fa-times-circle-o fa-2x" aria-hidden="true" onClick={() => this.setState({modal: 'none'})} ></i>
