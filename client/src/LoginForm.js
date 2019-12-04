// src/LoginForm.js

import React, { Component } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';

export default withAuth(class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      username: '',
      password: ''
    }

    this.oktaAuth = new OktaAuth({ url: props.baseUrl });

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
    .then(res => this.setState({
      sessionToken: res.sessionToken
    }))
    .catch(err => console.log('Found an error', err));
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({sessionToken: this.state.sessionToken});
      return null;
    }

    return (
      <div>
          <div className="limiter">
              <div className="container-login100" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
                  <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                  <form className="login100-form validate-form" onSubmit={this.handleSubmit}>
                      <span className="login100-form-title p-b-49">
                          Login
                      </span>
                      <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                          <span className="label-input100">Username</span>
                              <input className="input100" type="text" name="username" placeholder="Type your username" 
                                  id="username" type="text"
                                  value={this.state.username}
                                  onChange={this.handleUsernameChange} />
                          <span className="focus-input100" data-symbol="" />
                      </div>
                      <div className="wrap-input100 validate-input" data-validate="Password is required">
                          <span className="label-input100">Password</span>
                          <input className="input100" type="password" name="password" placeholder="Type your password" 
                              id="password" type="password"
                              value={this.state.password}
                              onChange={this.handlePasswordChange}  />
                          <span className="focus-input100" data-symbol="" />
                      </div>
                      <div className="text-right p-t-8 p-b-31">
                          <span></span>
                      </div>
                      <div className="container-login100-form-btn">
                      <div className="wrap-login100-form-btn">
                          <div className="login100-form-bgbtn" />
                          <button className="login100-form-btn" id="submit" type="submit" value="Submit">
                          Login
                          </button>
                      </div>
                    </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
);
  }
});

