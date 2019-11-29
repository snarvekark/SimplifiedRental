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
import Login from './containers/Login';
import OrderList from './containers/OrderList';

class App extends React.Component
{
	render(){
	    return (
			<div className="App">
	        <Router>
	          <div>
			  	<Navbar />
	            <Switch>
				  <Route exact path="/"><Dashboard /></Route> 
				  <Route exact path="/Dashboard"><Dashboard /></Route> 	
				  <Route exact path="/Manager"><Manager /></Route>
				  <Route exact path="/Technician"><Technician /></Route>  
	              <Route exact path="/OrderForm"><OrderForm /></Route>
	              <Route exact path="/AssignOrder"><AssignOrder /></Route>
				  <Route exact path="/Login"><Login /></Route>
				  <Route exact path="/OrderList"><OrderList /></Route>
  	          </Switch>
	          </div>
	        </Router>
	      </div>
	    );
	}
}

export default App;
