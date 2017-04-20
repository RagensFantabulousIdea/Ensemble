import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class EditUser extends Component {
    constructor(props) {
        super(props)
        this.editsignup = this.editsignup.bind(this)
        this.state= {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            project_token: '',
            form: null
        }
    }
    componentWillMount(){
        let userId = sessionStorage.getItem('userId')
        fetch('/api/users/' + userId + '?token=' + sessionStorage.getItem('token'))
            .then (response => response.json())
            // .then(response => console.log(response))
            .then(form => this.setState({
                form: form,
                firstname: form.first_name,
                lastname: form.last_name,
                email: form.email,
                password: form.password
            }))
            .then (whatever => console.log(this.state))

    }

        editsignup() {
        var firstname = this.state.firstname
        var lastname = this.state.lastname
        var email = this.state.email
        var password = this.state.password
        // var project_token = this.state.project_token
        let userId = sessionStorage.getItem('userId')
             fetch('/api/users/' + userId + '?token=' + sessionStorage.getItem('token'), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
        },
//left side is always controled by backend
        body: JSON.stringify({
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: password,
            project_token: this.props.params.project_token
        })
    })
        .then(function(response) {
                return response.json();
            })
        .then(function(response) {
                browserHistory.push('/projects')
        })
        
    }

    
                // <i className="fa fa-times-circle-o fa-2x signup-close" aria-hidden="true" onClick={this.props.closeSu} ></i>

render() {
return <div style={{display: this.props.modalSu}}>
    <div className="container modal-opac">
        <div className="panel modalSu">
            <div className="panel-body">
              
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" className="form-control name" placeholder="John" value={this.state.firstname} onChange={(e) => this.setState({firstname: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" className="form-control name" placeholder="Smith" value={this.state.lastname} onChange={(e) => this.setState({lastname: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control email" placeholder="johnsmith@gmail.com" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control password" maxLength="72" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}  required />
                </div>
            </div>
            <div className="panel-footer text-center">
                <button type="button" className="btn btn-lg actionButton" onClick={this.editsignup}>Click here to update your profile</button>
            </div>
        </div>
    </div>
    </div>

    }
}

export default EditUser;

   