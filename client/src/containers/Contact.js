import React, { Component } from "react";

/* Import Components */
import Manager from "../Manager";
import Technician from "../Technician";
import Dashboard from "../Dashboard";
import { Link, withRouter } from "react-router-dom";
import FormErrors from './Validation/FormErrors';
import ValidateForm from './Validation/ValidateForm';
import OrderList from './OrderList';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: "",
        email: "",
        message: "",
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
      alert("Thank you for contacting us. You will soon hear back from us.");
      this.setState({
          
            name: "",
            email: "",
            message: "",
            errors: {
              blankfield: false}
      });

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
  render() {
    return (
      <React.Fragment>  
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <h2 className="jumbotron-heading"> SIMPLIFIED RENTAL CONTACT</h2>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header bg-primary text-white"><i className="fa fa-envelope" /> Contact us.
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea className="form-control" id="message" rows={6} required defaultValue={""} />
                    </div>
                    <div className="mx-auto">
                      <button type="submit" className="btn btn-primary text-right">Submit</button></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="card bg-light mb-3">
                <div className="card-header bg-success text-white text-uppercase"><i className="fa fa-home" /> Address</div>
                <div className="card-body">
                  <p>1234 Apartments Drive</p>
                  <p>San Jose</p>
                  <p>California</p>
                  <p>Email : email@example.com</p>
                  <p>Tel. 1-123-456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="page-footer font-small green fixed-bottom static-bottom">     
      <div class="footer-copyright text-center py-3">© 2019 Copyright
        <Link to="http://18.224.193.99:3000"> Simplified Rental</Link>
      </div>
    </footer>
    </React.Fragment>
    );
}
}

export default withRouter(Contact);