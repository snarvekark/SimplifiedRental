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
import Navbar from './Navbar';
import Login from './containers/Login';

class App extends React.Component
{
	render(){
	    return (
			<div className="App">
				<Navbar />
	        <Router>
	          <div>
	            <Switch>
				  <Route exact path="/"><Dashboard /></Route> 	
	              <Route exact path="/OrderForm"><OrderForm /></Route>
	              <Route exact path="/AssignOrder"><AssignOrder /></Route>
				  <Route exact path="/Login"><Login /></Route>
  	          </Switch>
	          </div>
	        </Router>
	      </div>
	    );
	}
}

export default App;
