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
//import Custom_Login from './containers/Custom_Login';
import OrderList from './containers/OrderList';
import MgrOrderList from './containers/MgrOrderList';
import AssignedTasks from './containers/AssignedTasks';
import AddTechnician from './containers/AddTechnician';
import TechOrderList from './containers/TechOrderList';
import InprogressTasks from './containers/InprogressTasks';
import Twitter from './containers/Twitter';
import Yelp from './containers/Yelp';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from './Home';
import Login from './Login';
import Protected from './Protected';
import LoginForm from './LoginForm';
import Payment from './containers/Payment';
<<<<<<< HEAD
import Contact from './containers/Contact';
=======
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
>>>>>>> 62b2670a4854193ca8e31d6f4bf6649f4684f9db

function onAuthRequired({history}) {
	history.push('/Login');
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
          			<SecureRoute path='/Protected' component={Protected} />
          			<Route path='/Login' render={() => <Login baseUrl='https://dev-304860.okta.com/' />} />
          			<Route path='/implicit/callback' component={ImplicitCallback} />
					{/* <Route exact path="/"><Dashboard /></Route>  */}
					<Route exact path="/Dashboard"><Dashboard /></Route> 	
					<Route exact path="/Manager"><Manager /></Route>
					<Route exact path="/Technician"><Technician /></Route>  
					<Route exact path="/OrderForm"><OrderForm /></Route>
					<Route exact path="/AssignOrder" render={(props) => <AssignOrder {...props} />}><AssignOrder /></Route>
					{/* <Route exact path="/Custom_Login"><Custom_Login /></Route> */}
					<Route exact path="/OrderList"><OrderList /></Route>
					<Route exact path="/AddTechnician"><AddTechnician /></Route>
					<Route exact path="/AssignedTasks"><AssignedTasks /></Route>
					<Route exact path="/TechOrderList"><TechOrderList /></Route>
					<Route exact path="/InprogressTasks"><InprogressTasks /></Route>
					<Route exact path="/Twitter"><Twitter /></Route>
					<Route exact path="/Yelp"><Yelp /></Route>
					<Route exact path="/Contact"><Contact /></Route>
					{/* <Route exact path="/Payment"><Payment /></Route> */}
					<Route exact path="/MgrOrderList" render={(props) => <MgrOrderList {...props}/>}><MgrOrderList /></Route>
					<StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
						<Elements>
							<Route exact path="/Payment"><CheckoutForm /></Route>
          				</Elements>        
      				</StripeProvider>
				  </Security>
  	          </Switch>
	          </div>
	        </Router>
	      </div>
	    );
	}
}

export default App;
