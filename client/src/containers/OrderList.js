import React, { Component } from "react";

/* Import Components */
import Manager from "../Manager";
import Technician from "../Technician";
import Dashboard from "../Dashboard";
import { Link, withRouter } from "react-router-dom";
import FormErrors from './Validation/FormErrors';
import ValidateForm from './Validation/ValidateForm';
import OrderForm from './OrderForm';
import { JsonToTable } from "react-json-to-table";


class OrderList
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
       orderList : []
   } 
  }
  componentWillMount() {
    this.getData();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  getData = async () => {
    let URL = "http://localhost:8080/api/getWorkOrders";
    fetch(URL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          orderList: response
        });
        console.log("Order List" + JSON.stringify(this.state.orderList));
      });
    console.log("After Fetch");
  };

  renderTableData() {
    return this.state.orderList.map((response) => {
       const { id, priority, description, status} = response 
        return (
            <tr key={id}>
              <td>{id}</td>
              <td>{priority}</td>
              <td>{description}</td>
              <td>{status}</td>
              <td><button className="btn btn-default btn-light" onClick={() => this.callDeleteApi(response.id)}>
                  Delete
                </button>
              </td>
            </tr>
        )
    })
  }

  callDeleteApi(id){
    console.log("User can delete the request if problem no longer persits");
    window.confirm("Proceed to delete the request");
  }
  
 render () {
    return (
      <form>
      <div className="container">
        <div className="container-fluid">
          <h1>Order List</h1>
          <table class="table table-bordered table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Priority</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </div>
      </form>

    )
  }
}


export default withRouter(OrderList);
