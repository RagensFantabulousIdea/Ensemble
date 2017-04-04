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
            password: ''
         
        }
    }

    signup() {
        var firstname = this.state.firstname
        var lastname = this.state.lastname
        var email = this.state.email
        var password = this.state.password

        console.log(firstname,lastname, email, password)

        if (firstname === '' || lastname === '' || email === '' || password === '') {
            alert('You must fill in all fields')
        }  else if (!email.includes('@') || (email.slice(email.length - 4, email.length - 3) !== '.')) {
            alert('You must enter a valid email address')
        } 
         else {


        fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
//left side is always control by backend
        body: JSON.stringify({
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: password
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
                browserHistory.push('/')
           } else {
                alert('Signup error: ' + response)
            }
        })
        }
}

render() {
return <div>
    <div className="container">
        <div className="panel panel-default">
            <div className="panel-heading">
                <h5 className="panel-title text-center">Sign Up</h5>
                </div>
            <div className="panel-body">
                <div className="form-group">
                    <label htmlFor="name">First Name</label>
                    <input type="text" id="name" className="form-control" value={this.state.firstname} onChange={(e) => this.setState({firstname: e.target.value})}required/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Last Name</label>
                    <input type="text" id="name" className="form-control" value={this.state.lastname} onChange={(e) => this.setState({lastname: e.target.value})}required/>
                </div>
                <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="form-control" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} required />
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
