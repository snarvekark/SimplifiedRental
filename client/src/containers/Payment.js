import React, { Component } from "react";

/* Import Components */
import Manager from "../Manager";
import Technician from "../Technician";
import Dashboard from "../Dashboard";
import { Link, withRouter } from "react-router-dom";
import FormErrors from './Validation/FormErrors';
import ValidateForm from './Validation/ValidateForm';
import OrderList from './OrderList';

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
        number: "",
        month: "",
        year: "",
        cvv: "",
        errors: {
          blankfield: false
        }
    };
    
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        blankfield: false
      }
    });
  }

 onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    
  }


 handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = ValidateForm(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }
    try
    {
      let userData = this.state;
      
      console.log("Inside Handle Submit");
      console.log(JSON.stringify(userData));
      //Integrate Payment Service here
    }
    catch (error) {
      let err = null;
      !error.message ? err = { "message": error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors
        }
      });
    }
  } 
    

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
        number: "",
        month: "",
        year: "",
        cvv: ""
  });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2 style={{marginTop: '30px'}}>Pay your Bills</h2>
        
        <FormErrors formerrors={this.state.errors} />
        <div class="d-flex justify-content-center align-items-center container">
          <form className="container-fluid" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="form-group col-md-3">
              <label for="number">
                  Card Number
                </label>
                <input 
                  className="form-control" 
                  type="text"
                  id="number"
                  aria-describedby="numberHelp"
                  placeholder="Enter Card Number"
                  value={this.state.number}
                  onChange={this.onInputChange}
                />
              </div>
              </div>
              <div className="row">
              <div className="form-group col-md-3">
              <label for="month">
                  Expiration Month
                </label>
                <input 
                  className="form-control" 
                  type="text"
                  id="month"
                  aria-describedby="monthHelp"
                  placeholder="Expiration Month"
                  value={this.state.month}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-3">
                <label for="year">
                  Expiration Year
                </label>
                <input 
                  className="form-control" 
                  type="text"
                  id="year"
                  aria-describedby="yearHelp"
                  placeholder="Expiration Year"
                  value={this.state.year}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-3">
              <label for="cvv">
                  Secure Code
                </label>
                <textarea className="form-control" 
                  type="text"
                  id="cvv"
                  aria-describedby="cvvHelp"
                  placeholder="Enter Secure Code"
                  value={this.state.cvv}
                  onChange={this.onInputChange}>
                </textarea>
              </div>
            </div>
            <div className="form-group col-md-1">
            <button className="btn btn-primary btn-lg">
              Submit
            </button>
            </div>
            <div className="form-group col-md-1">
              <Link className="btn btn-primary btn-lg" to='/Dashboard'>My Dashboard</Link>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
}


export default withRouter(Payment);
