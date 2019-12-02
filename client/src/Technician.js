import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';

import OrderForm from './containers/OrderForm';
import AssignOrder from './containers/AssignOrder';
import Login from './containers/Login';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Manager from './Manager';
import { Link, withRouter } from "react-router-dom";

class Technician extends React.Component {  
    render() {
        return (
      <React.Fragment>
      <div className="bg" style = {{height:"100vh"}}>
          <div id="content-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card text-white bg-primary o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fas fa-fw fa-comments" />
                      </div>
                      <div className="mr-5">
                        View Tasks
                      </div>
                      <a className="card-footer text-white clearfix small z-1" href="/TechOrderList" onClick="">
                          <span className="float-left">View Details</span>
                          <span className="float-right">
                          <i className="fas fa-angle-right" />
                          </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card text-white bg-warning o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fas fa-fw fa-list" />
                      </div>
                      <div className="mr-5">My Account</div>
                        <a className="card-footer text-white clearfix small z-1" href="#">
                            <span className="float-left">View Details</span>
                            <span className="float-right">
                            <i className="fas fa-angle-right" />
                            </span>
                        </a>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class="footer-copyright text-center py-3 bg-light static-bottom">© 2019 Copyright
          <a href="http://localhost:3000"> Simplified Rental</a>
        </div>
      </footer>
  </React.Fragment>
   );
}
}
export default Technician;