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
            token: '',
            modal: "none",
            xmark: "none"
         
        }
    }

    signup() {
        var firstname = this.state.firstname
        var lastname = this.state.lastname
        var email = this.state.email
        var password = this.state.password
        var token = this .state.token

        console.log(firstname,lastname, email, password)

        if (firstname === '' || lastname === '' || email === '' || password === '') {
            alert('You must fill in all fields')
        }  else if (!email.includes('@') || (email.slice(email.length - 4, email.length - 3) !== '.')) {
            alert('You must enter a valid email address')
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
            token: this.props.params.token
        })
    })
        .then(function(response) {
                console.log('response.json ' + response.json)
                return response.json();
            })
        .then(function(response) {
            console.log('response.token ' + response.token)

            if (response.token) {
                (console.log('response token true ' + response.token))
                sessionStorage.setItem('token', response.token)
                sessionStorage.setItem('userId', response.id)
                // browserHistory.push('/')
                browserHistory.push('/projects')
           } else {
                alert('Signup error: ' + response)
            }
        })
        }
}

render() {
return <div style= {{display: this.props.modalSu}}>
    <div className="container modal-opac">
        <div className="panel panel-default">
            <div className="panel-heading">
                <h5 className="panel-title text-center">Sign Up</h5>
                <i className="fa fa-times-circle-o fa-2x signup-close" aria-hidden="true" onClick={() => this.setState({xmark: 'none'})} ></i>
             
                    
                </div>
                 
            <div className="panel-body">
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="name" className="form-control" placeholder="John" value={this.state.firstname} onChange={(e) => this.setState({firstname: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="name" className="form-control" placeholder="Smith" value={this.state.lastname} onChange={(e) => this.setState({lastname: e.target.value})}required/>
                </div>
                <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="form-control" placeholder="johnsmith@gmail.com" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} required />
                </div>
                <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" maxLength="72" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}  required />
                </div>
                 </div>
                <div className="panel-footer text-center">
                <button id="actionButton" type="button" className="btn btn-lg btn-success" onClick={this.signup}>Sign Up</button>
                    </div>
            </div>
        </div>
    </div>

    }
}

export default SignUp;

    // <i className="fa fa-times-circle-o fa-2x" aria-hidden="true" onClick={() => this.setState({modal: 'none'})} ></i>
