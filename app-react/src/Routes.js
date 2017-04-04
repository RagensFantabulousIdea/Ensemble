// Load React
import React from 'react'
// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load page view components
// Import your Todos and Completed components here...
import Welcome from './components/Welcome'
// import Checkout from './Checkout'
// import Signup from './Signup'
// import Signin from './Signin'
// Configure routes
class Routes extends React.Component {
    render() {
        return <Router history={browserHistory}>
            <Route path="/" component={Welcome} />
                </Router>
    }
}
export default Routes
   // <Route path="/checkout" component={Checkout} />
            // <Route path="/signup" component={Signup} />
            // <Route path="/signin" component={Signin} />