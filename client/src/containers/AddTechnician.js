import React, { Component } from "react";

/* Import Components */
import Manager from "../Manager";
import Technician from "../Technician";
import Dashboard from "../Dashboard";
import { Link, withRouter } from "react-router-dom";
import FormErrors from './Validation/FormErrors';
import ValidateForm from './Validation/ValidateForm';
import OrderList from './OrderList';

class AddTechnician extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: "",
        speciality: "",
        availibility: "",
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
      /*fetch("http://localhost:8080/api/createWorkOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          },
          body: JSON.stringify(workOrder)
        }).then(response => {
          console.log("Successful" + response);
        });*/
        console.log("You added the Technician");
        this.props.history.push("/MgrOrderList");
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
        name: "",
        speciality: "",
        availability: []
  });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2 style={{marginTop: '30px'}}>Add New Technician</h2>
        
        <FormErrors formerrors={this.state.errors} />
        <div class="d-flex justify-content-center align-items-center container">
          <form className="container-fluid" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="form-group col-md-3">
              <label for="name">
                  Name
                </label>
                <input 
                  className="form-control" 
                  type="text"
                  id="name"
                  aria-describedby="nameHelp"
                  placeholder="Enter First Name"
                  value={this.state.name}
                  onChange={this.onInputChange}
                />
              </div>
              </div>
              <div className="row">
              <div className="form-group col-md-3">
              <label for="adress">
                  Speciality
                </label>
                <input 
                  className="form-control" 
                  type="text"
                  id="speciality"
                  aria-describedby="specialityHelp"
                  placeholder="Enter Speciality"
                  value={this.state.speciality}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-3">
              <label for="availibility">
                  Availability
                </label>
                <textarea className="form-control" 
                  type="textArea"
                  id="description"
                  aria-describedby="availabilityHelp"
                  placeholder="Enter Availability"
                  value={this.state.availability}
                  onChange={this.onInputChange}>
                </textarea>
              </div>
            </div>
            <div className="form-group col-md-1">
            <button className="btn btn-primary">
              Submit
            </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    );
  }
}


export default withRouter(AddTechnician);
