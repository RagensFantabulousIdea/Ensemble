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
import Project from './components/Project'

// Configure routes
class Routes extends React.Component {
    render() {
        return <Router history={browserHistory}>
            <Route path="/" component={Welcome} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/projects" component={UserProjects} />
            <Route path="/projects/new" component={CreateProject} />
            <Route path="/invite/:projectId" component={Invite} />
            <Route path="/projects/:projectId/view" component={Project} />
            <Route path="/projects/:projectId/edit" component={CreateProject} />
        </Router>
    }
}

export default Routes