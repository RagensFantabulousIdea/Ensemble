import React, { Component } from 'react';
// import SignUp from './SignUp'
import { browserHistory } from 'react-router';
class Signin extends Component {
//  constructor(props) {
//         super(props)

//         this.signin = this.signin.bind(this)

//         this.state= {
//             email: '',
//             password: ''
//         }
//     }

//     signin() {
//         var email = this.state.email
//         var password = this.state.password
//         console.log(email, password) 

//         fetch('https://sock-o-ramma.herokuapp.com/api/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },

//         body: JSON.stringify({
//             email: email,
//             password: password
//         })
//     })

//     .then(function(response) {
//         console.log(response)
//             return response.json();
//         })

//     .then(function(response) {
//             console.log(response);

//             if (response.token) {
//                 sessionStorage.setItem('token', response.token);
//                 browserHistory.push('/')            }
//             else {
//                 alert('There was an error signing in');
//                 console.log('Signin : ' + response);
//             }
//         })

// }

    render() {
return <div>
    <div className="container">
        <div className="panel panel-default">
             <div className="panel-body">
                <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input type="text" id="email" className="form-control" required />
                        </div>
                <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" maxLength="72" required />
                        </div>
                </div>
            <div className="panel-footer text-center">
            <button id="actionButton" type="button" className="btn btn-lg btn-success" >Sign in</button>
                <div>
            </div>
        </div>
    </div>
</div>
</div>
        
    }
}



export default Signin;

