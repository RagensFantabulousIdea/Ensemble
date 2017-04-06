// Load React
import React from 'react'

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load page view components
// Import your Todos and Completed components here...

import Welcome from './components/Welcome'
import SignUp from './components/SignUp'
import Signin from './components/Signin'
import UserProjects from './components/UserProjects'
import CreateProject from './components/CreateProject'
import Invite from './components/Invite'
// import Signin from './Signin'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Router history={browserHistory}>
            <Route path="/" component={Welcome} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={Signin} />
            <Route path="/userprojects" component={UserProjects} />
             <Route path="/createproject" component={CreateProject} />
              <Route path="/invite" component={Invite} />
           
       
        </Router>
    }
}

export default Routes


   // <Route path="/checkout" component={Checkout} />
            // <Route path="/signup" component={Signup} />
            // <Route path="/signin" component={Signin} />