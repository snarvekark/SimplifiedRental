import React, { Component } from "react";

/* Import Components */
import Manager from "../Manager";
import Technician from "../Technician";
import Dashboard from "../Dashboard";
import { Link, withRouter } from "react-router-dom";
import FormErrors from './Validation/FormErrors';
import ValidateForm from './Validation/ValidateForm';
import OrderList from './OrderList';


class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: "",
        address: "",
        priority: "",
        description: "",
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
      let workOrder = {
        userid: "1",
        description: userData.description,
        aptNum: userData.address,
        priority: userData.priority,
        status: "PENDING"
      };
      console.log("Inside Handle Submit");
      console.log(JSON.stringify(workOrder));
      fetch("http://localhost:8080/api/createWorkOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
          },
          body: JSON.stringify(workOrder)
        }).then(response => {
          console.log("Successful" + response);
        });
        console.log("You submitted the form");
        this.props.history.push("/OrderList");
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
        address: "",
        priority: [],
        description: ""
  });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2 style={{marginTop: '30px'}}>Customer Orders</h2>
        
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
                  Address
                </label>
                <input 
                  className="form-control" 
                  type="text"
                  id="address"
                  aria-describedby="addressHelp"
                  placeholder="Enter Address"
                  value={this.state.address}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-3">
              <label for="description">
                  Description
                </label>
                <textarea className="form-control" 
                  type="textArea"
                  id="description"
                  aria-describedby="descriptionHelp"
                  placeholder="Enter Description"
                  value={this.state.description}
                  onChange={this.onInputChange}>
                </textarea>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-3">
                <label for="priority">
                  Prority
                </label>
                  <select className="form-control" id="priority" value={this.state.value} onChange={this.onInputChange} 
                    aria-describedby="priorityHelp" placeholder="Select Priority">
                    <option value="default" defaultValue>Select</option>  
                    <option value="low">Low</option>
                    <option value="high">High</option>
                    <option value="high">Urgent</option>
                    <option value="high">Cosmetic</option>
                  </select>
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


export default withRouter(OrderForm);
