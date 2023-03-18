import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
    return (
        <Router>
            <ul>
                <Link to="/login">Login</Link>
                <Link to="/resgiter">Register</Link>
            </ul>

            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} />
                <Route path="/resgiter" component={Register} />
            </Switch>
        </Router>
    );
}

export default App;
