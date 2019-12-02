import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';

import OrderForm from './containers/OrderForm';
import AssignOrder from './containers/MgrOrderList';
import Login from './containers/Login';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Technician from './Technician';
import { Link, withRouter } from "react-router-dom";


class Manager extends React.Component {  
    render() {
        return (
    <React.Fragment>
    <div className="bg" style = {{height:"100vh"}}>
        <div id="content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-warning o-hidden h-100">
                            <div className="card-body">
                                <div className="card-body-icon">
                                    <i className="fas fa-fw fa-list" />
                                </div>
                                <div className="mr-5">Assign Task</div>
                                <a className="card-footer text-white clearfix small z-1" href="/MgrOrderList">
                                    <span className="float-left">View Details</span>
                                    <span className="float-right">
                                        <i className="fas fa-angle-right" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-success o-hidden h-100">
                            <div className="card-body">
                                <div className="card-body-icon">
                                    <i className="fas fa-fw fa-shopping-cart" />
                                </div>
                                <div className="mr-5">Add Technician</div>
                                <a className="card-footer text-white clearfix small z-1" href="/AddTechnician">
                                    <span className="float-left">View Details</span>
                                    <span className="float-right">
                                        <i className="fas fa-angle-right" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="card text-white bg-danger o-hidden h-100">
                            <div className="card-body">
                                <div className="card-body-icon">
                                    <i className="fas fa-fw fa-life-ring" />
                                </div>
                                <div className="mr-5">Admin Access</div>
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
export default Manager;