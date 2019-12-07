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
import AssignOrder from './AssignOrder';
import AssignedTasks from './AssignedTasks';


class MgrOrderList
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
       orderList : [],
       passonId : "",
       currentOrder : [],
       technician: "",
       technicianList: [],
       selectedTechnician: ""
   }
  }

  getTechniciansList = async () => {
    let URL = "http://18.224.193.99:8080/api/getTechnicians";
    fetch(URL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          technicianList: response
        });
        console.log("json data is" + JSON.stringify(this.state.technicianList));
      });
    console.log("after log");
  };

  componentWillMount() {
    this.getData();
    this.getTechniciansList();
  }

  renderDropDown = () => {
    let arrayOfData = this.state.technicianList;
    if (arrayOfData) {
      return arrayOfData.map(data => {
        return (
          <option key={data.id} value={data.id}>
            {data.firstName + " " + data.lastName}
          </option>
        );
      });
    }
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  getData = async () => {
    let URL = "http://18.224.193.99:8080/api/getWorkOrders";
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

  assignTechnician = async (orderId) => {
    console.log("Assign Technician");
    console.log("orderId"+orderId);
    try
    {
      let updateOrder = {
        technician: {
          id: this.state.selectedTechnician
        }
      };
      fetch("http://18.224.193.99:8080/api/updateWorkOrder/" + orderId, {
          method: "PUT",
          body: JSON.stringify(updateOrder),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(response => {
          response.json().then(data => {
            console.log("Successful" + data);
          });
        });
        this.props.history.push("/AssignedTasks");
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
  };

  onInputChange = event => {
    this.state.selectedTechnician = event.target.value;
  };


  renderTableData() {
    return this.state.orderList.map((response) => {
       const { id, priority, description, status, userEmail} = response

        return (
            <tr key={id}>
              <td>{id}</td>
              <td>{priority}</td>
              <td>{description}</td>
              <td>{status}</td>
              <td>{userEmail}</td>
              <td>
                <select
                    className="form-control"
                    id="technician"
                    value={this.state.value}
                    onChange={this.onInputChange}
                    aria-describedby="technicianHelp"
                    placeholder="Select Technician"
                >
                    <option value="default" defaultValue>
                        Select
                    </option>
                    {this.renderDropDown()}
                </select>
            </td>
            <td><button className="btn btn-default btn-light" onClick={() => this.assignTechnician(id)}>
                Assign Technician
                </button>
            </td>
            </tr>
        )
    })
  }


 render () {
    return (
      <form>
      <div className="container">
        <div className="container-fluid">
          <h1>Assign Technician</h1>
          <table class="table table-bordered table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Priority</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">User Email</th>
                <th scope="col">Technician</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
        <div className="container-fluid">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>
                  <Link className="btn btn-primary btn-lg" to='/Manager'>My Dashboard</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </form>

    )
  }
}


export default withRouter(MgrOrderList);
