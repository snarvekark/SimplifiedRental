import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null,userinfo: null };
    this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }
  
  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
    if (authenticated && !this.state.userinfo) {
        const userinfo = await this.props.auth.getUser();
        localStorage.userEmail = userinfo.email;
        this.setState({ userinfo });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    if (this.state.authenticated === null) return null;

    const button = this.state.authenticated ?
      <button onClick={() => {this.props.auth.logout()}}>Logout</button> :
      <button onClick={() => {this.props.auth.login()}}>Login</button>;

    const value = this.state.userinfo ? this.state.userinfo.userCategory : '/';
    // if(value === 'Customer'){
    //     value = 'Dashboard';
    // }
    console.log(value);
      

    return (
      <div className="limiter">
        <div className="container-login100" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
          <div class="row">
            <div class="col-md-12 white-text text-center">
              <h1 class="display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold wow fadeInDown" data-wow-delay="0.3s">
                Simplified Rental
              </h1>
              <h5 class="text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 white-text font-weight-bold wow fadeInDown"
                data-wow-delay="0.3s">Rental Property Management Made Simpler
              </h5>
            </div>
            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54 col-md-12 text-center">
              <form className="login100-form validate-form" onSubmit={this.handleSubmit}>
                <span className="login100-form-title p-b-49">
                  <button className="login100-form-btn">
                    <Link to={'/'+value}>My Dashboard</Link><br/>
                  </button>
                  {button}
                </span>
              </form>
            </div>
          </div>
      </div>
    </div>
      
    );
  }
});

