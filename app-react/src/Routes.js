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
import CompletedProjects from './components/CompletedProjects'
import ProjectShootList from './components/ProjectShootList'
import ProjectCreateCard from './components/ProjectCreateCard'
import ProjectShootFullCard from './components/ProjectShootFullCard'
import ProjectShootMiniCard from './components/ProjectShootMiniCard'
import ProjectCreateCard from './components/ProjectCreateCard'
import ProjectPhotoCollaboratingPhotoCard from './components/ProjectPhotoCollaboratingPhotoCard'
import ProjectPhotoCollaborating from './components/ProjectPhotoCollaborating'
import ProjectAllPhotosList from './components/ProjectAllPhotosList'
import ProjectExtraPhotosList from './components/ProjectExtraPhotosList'
import ProjectExtraPhotosCard from './components/ProjectExtraPhotosCard'
import FullSizedImageView from './components/FullSizedImageView'
//Manpreet added a new component edit.js
import Edit from './components/Edit'
// import completedProjects from './components/completedProjects'



// Configure routes
class Routes extends React.Component {
    render() {
        return <Router history={browserHistory}>
            <Route path="/" component={Welcome} />
            <Route path="/sandbox" component={ProjectShootList} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/projects" component={UserProjects} />
            <Route path="/projects/complete" component={UserProjects} />
            <Route path="/projects/new" component={CreateProject} />
            <Route path="/invite/:projectId" component={Invite} />
            <Route path="/projects/:projectId/view" component={Project} />
            <Route path="/projects/:projectId/edit" component={CreateProject} />
<<<<<<< HEAD
            <Route path="/completedprojects/:projectId" component={CompletedProjects} />
=======
            <Route path="/edit/:projectId" component={Edit} />
>>>>>>> 020129fd55a0e4211059579055d2f2b6aba01a82
        </Router>
    }
}

export default Routes