import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';

import { Link, withRouter } from "react-router-dom";
import FormErrors from "./Validation/FormErrors";
import Validate from "./Validation/ValidateForm";

class Login extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
        username: "",
        password: "",
        errors: {
          blankfield: false
        }
      }
      };
    
      clearErrorState = () => {
        this.setState({
          errors: {
            blankfield: false
          }
        });
      };
    
      handleSubmit = async event => {
        event.preventDefault();
    
        // Form validation
        this.clearErrorState();
        const error = Validate(event, this.state);
        if (error) {
          this.setState({
            errors: { ...this.state.errors, ...error }
          });
        }
        else
        {
            alert("Form Validated");
        }
       
      };
    
      onInputChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
        document.getElementById(event.target.id).classList.remove("is-danger");
      };
    
    render() {
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
                                        value={this.state.username}
                                        id="username"
                                        onChange={this.onInputChange} />
                                <span className="focus-input100" data-symbol="" />
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <span className="label-input100">Password</span>
                                <input className="input100" type="password" name="password" placeholder="Type your password" 
                                    value={this.state.password}
                                    id="password"
                                    onChange={this.onInputChange} />
                                <span className="focus-input100" data-symbol="" />
                            </div>
                            <div className="text-right p-t-8 p-b-31">
                                <a href="#">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn" />
                                <button className="login100-form-btn">
                                Login
                                </button>
                            </div>
                            </div>
                                <div className="txt1 text-center p-t-54 p-b-20">
                                <span>
                                    Or Sign Up Using
                                </span>
                            </div>
                            <div className="flex-c-m">
                                <a href="#" className="login100-social-item bg2">
                                    <i className="fa fa-twitter" />
                                </a>
                                <a href="#" className="login100-social-item bg3">
                                    <i className="fa fa-google" />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
}
export default Login;