import * as React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import {Dashboard} from "./dashboard/dashboard";
import {Communes} from "./communes/communes";
import {LoginForm} from "./auth/login_form";
import {RegisterForm} from "./auth/register_form";


const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb: any)  {
        this.isAuthenticated = true;
    },
    signout(cb: any) {
        this.isAuthenticated = false;
    }
}


class App extends React.Component<{}, null> {
  render() {
    return (
      <Router>
          <div>
          <div>
              <ul>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
          </div>

          <PrivateRoute path="/communes" component={Communes} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          </div>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        fakeAuth.isAuthenticated ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
        )
    )}/>
)

export default App;
