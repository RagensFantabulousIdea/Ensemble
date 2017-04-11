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
import ProjectShootList from './components/ProjectShootList'
import ProjectShootFullCard from './components/ProjectShootFullCard'
import ProjectShootMiniCard from './components/ProjectShootMiniCard'
import Project from './components/Project'
import ProjectCreateCard from './components/ProjectCreateCard'
import completedProjects from './components/completedProjects'
import ProjectPhotoCollaborating from './components/ProjectPhotoCollaborating'
import ProjectPhotoCollaboratingPhotoCard from './components/ProjectPhotoCollaboratingPhotoCard'
import ProjectAllPhotosList from './components/ProjectAllPhotosList'
import ProjectExtraPhotosList from './components/ProjectExtraPhotosList'
import ProjectExtraPhotosCard from './components/ProjectExtraPhotosCard'
import FullSizedImageView from './components/FullSizedImageView'
//Manpreet added a new component edit.js
import Edit from './components/Edit'



// Configure routes
class Routes extends React.Component {
    render() {
        return <Router history={browserHistory}>
            <Route path="/" component={Welcome} />
            <Route path="/sandbox" component={FullSizedImageView} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/projects" component={UserProjects} />
            <Route path="/projects/new" component={CreateProject} />
            <Route path="/invite/:projectId" component={Invite} />
            <Route path="/projects/:projectId/view" component={Project} />
            <Route path="/projects/:projectId/edit" component={CreateProject} />
            <Route path="/completedprojects/:projectId" component={completedProjects} />
            <Route path="/edit/:projectId" component={Edit} />
        </Router>
    }
}

export default Routes