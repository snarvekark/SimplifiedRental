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

class Dashboard extends React.Component {  
    render() {
        return (
      <div>
          <div id="content-wrapper">
            <div className="container-fluid">
              {/* Breadcrumbs*/}
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Overview</li>
              </ol>
              {/* Icon Cards*/}
              <div className="row">
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card text-white bg-primary o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fas fa-fw fa-comments" />
                      </div>
                      <div className="mr-5">
                        Register Complaint
                      </div>
                    <a className="card-footer text-white clearfix small z-1" href="/OrderForm">
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
                      <div className="mr-5">Assign Task</div>
                      <a className="card-footer text-white clearfix small z-1" href="/AssignOrder">
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
                    </div>
                  </div>
                </div>
              </div>
            </div></div></div>
   );
}
}
export default Dashboard;