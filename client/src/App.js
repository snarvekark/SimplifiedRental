import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, 
  Route,
  Switch,
  Link
} from 'react-router-dom';

import OrderForm from './containers/OrderForm';
import AssignOrder from './containers/AssignOrder';
import Dashboard from './Dashboard';
import Manager from './Manager';
import Technician from './Technician';
import Navbar from './Navbar';
//import Login from './containers/Login';
import OrderList from './containers/OrderList';
import MgrOrderList from './containers/MgrOrderList';
import AssignedTasks from './containers/AssignedTasks';
import AddTechnician from './containers/AddTechnician';
import TechOrderList from './containers/TechOrderList';
import InprogressTasks from './containers/InprogressTasks';
import Twitter from './containers/Twitter';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from './Home';
import Login from './Login';
import Protected from './Protected';

function onAuthRequired({history}) {
	history.push('/login');
}

class App extends React.Component
{
	render(){
	    return (
			<div className="App">
	        <Router>
	          <div>
			  	<Navbar />
	            <Switch>
				<Security issuer='https://dev-304860.okta.com/oauth2/default'
                  clientId='0oa20apu12UzBNBYH357'
                  redirectUri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired}
                  pkce={true} >
					<Route path='/' exact={true} component={Home} />
          			<SecureRoute path='/protected' component={Protected} />
          			<Route path='/login' render={() => <Login baseUrl='https://dev-304860.okta.com/' />} />
          			<Route path='/implicit/callback' component={ImplicitCallback} />
					{/* <Route exact path="/"><Dashboard /></Route>  */}
					<Route exact path="/Dashboard"><Dashboard /></Route> 	
					<Route exact path="/Manager"><Manager /></Route>
					<Route exact path="/Technician"><Technician /></Route>  
					<Route exact path="/OrderForm"><OrderForm /></Route>
					<Route exact path="/AssignOrder" render={(props) => <AssignOrder {...props} />}><AssignOrder /></Route>
					{/* <Route exact path="/Login"><Login /></Route> */}
					<Route exact path="/OrderList"><OrderList /></Route>
					<Route exact path="/AddTechnician"><AddTechnician /></Route>
					<Route exact path="/AssignedTasks"><AssignedTasks /></Route>
					<Route exact path="/TechOrderList"><TechOrderList /></Route>
					<Route exact path="/InprogressTasks"><InprogressTasks /></Route>
					<Route exact path="/Twitter"><Twitter /></Route>
					<Route exact path="/MgrOrderList" render={(props) => <MgrOrderList {...props}/>}><MgrOrderList /></Route>
				  </Security>
  	          </Switch>
	          </div>
	        </Router>
	      </div>
	    );
	}
}

export default App;
