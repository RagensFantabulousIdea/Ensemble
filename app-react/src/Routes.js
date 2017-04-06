// Load React
import React from 'react'

// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load page view components
// Import your Todos and Completed components here...
import Welcome from './components/Welcome'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import UserProjects from './components/UserProjects'
import CreateProject from './components/CreateProject'
import Invite from './components/Invite'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Router history={browserHistory}>
            <Route path="/" component={Welcome} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/userprojects" component={UserProjects} />
            <Route path="/createproject" component={CreateProject} />
            <Route path="/invite" component={Invite} />
        </Router>
    }
}

export default Routes