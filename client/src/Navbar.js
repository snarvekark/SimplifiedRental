import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';

import OrderForm from './containers/OrderForm';
import AssignOrder from './containers/AssignOrder';
import { Link, withRouter } from "react-router-dom";
import Dashboard from './Dashboard';
import Manager from './Manager';
import Technician from './Technician';

class Navbar extends React.Component {  
    
    render() {
        return (
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light static-top">
          <Link className="navbar-brand mr-1" to="/Dashboard">
            <i className="fas fa-home" />
          </Link>
          <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
            <i className="fas fa-bars" />
          </button>
          <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown no-arrow">
              <Link className="nav-link dropdown-toggle" to="/Login" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user-circle fa-fw" />
              </Link>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <a className="dropdown-item" href="#">Settings</a>
                <a className="dropdown-item" href="#">Activity Log</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>
              </div>
            </li>
          </ul>
          {/*<ul className="navbar-nav ml-auto">
            <li className="dropdown">
              <div class="dropdown rightnav">
                <button class="btn btn-success dropdown-toggle btn-lg rightnav" type="button" id="dropdownMenu1" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Roles</button>
                <div class="dropdown-menu dropdown-primary">
                  <React.Fragment>
                  <Link to="/Dashboard" className="dropdown-item">Customer</Link>
                  <Link to="/Manager" className="dropdown-item">Manager</Link>
                  <Link to="/Technician" className="dropdown-item">Technician</Link>
                  </React.Fragment>
                </div>
              </div>
            </li>
        </ul>*/}
        </nav>
    </div>);
}
}
export default withRouter(Navbar);
