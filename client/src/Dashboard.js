import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';

import OrderForm from './containers/OrderForm';
import OrderList from './containers/OrderList';
import AssignOrder from './containers/AssignOrder';
import Navbar from './Navbar';
import Manager from './Manager';
import Technician from './Technician';
import { Link, withRouter } from "react-router-dom";


class Dashboard extends React.Component {  
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
                Maintenance Requests
              </div>
              <Link className="card-footer text-white clearfix small z-1" to="/OrderList" onClick="">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fas fa-angle-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-danger o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fas fa-fw fa-life-ring" />
              </div>
              <div className="mr-5">Bill Payments</div>
              <Link className="card-footer text-white clearfix small z-1" to="/Payment">
                <span className="float-left">View Details</span>
                <span className="float-right">
                    <i className="fas fa-angle-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/*<div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-success o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fas fa-fw fa-shopping-cart" />
              </div>
              <div className="mr-5">Book A Tour</div>
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
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-warning o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fas fa-fw fa-comments" />
              </div>
              <div className="mr-5">
                Ammenities
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fas fa-angle-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-3">
          <div className="card text-white bg-primary o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fas fa-fw fa-list" />
              </div>
              <div className="mr-5">Floor Plans</div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fas fa-angle-right" />
                </span>
              </a>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  </div>
</div>
<footer class="page-footer font-small green fixed-bottom static-bottom">
      <div class="container">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
          <Link className="login100-social-item bg3" to="/Yelp">
            <i className="fab fa-yelp"></i>
          </Link>
          </li>
          <li class="list-inline-item">
          <Link to="/Twitter" class="login100-social-item bg2">
            <i class="fab fa-twitter"></i>
          </Link>
          </li>
        </ul>
      </div>
    <div class="footer-copyright text-center py-3">© 2019 Copyright
      <Link to="http://localhost:3000"> Simplified Rental</Link>
    </div>
  </footer>
  </React.Fragment>
   );
}
}
export default Dashboard;