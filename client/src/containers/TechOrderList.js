import React, { Component } from "react";

/* Import Components */
import Dashboard from "../Dashboard";
import { Link, withRouter } from "react-router-dom";
import FormErrors from './Validation/FormErrors';
import ValidateForm from './Validation/ValidateForm';


class TechOrderList
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
       orderList : [],
       updatedStatus : ""
   }
  }

  componentWillMount() {
    this.getData();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  getData = async () => {
    let email = localStorage.userEmail;
    let URL = "http://18.224.193.99:8080/api/getTechnicianOrders/"+email;
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

  updateStatus = async (orderId) => {
    console.log("Edit Request Status");
    console.log("orderId"+orderId);
    try
    {
      let updateStatus = {
        status: "IN PROGRESS"
      }
      fetch("http://18.224.193.99:8080/api/updateStatusWorkOrder/" + orderId, {
          method: "PUT",
          body: JSON.stringify(updateStatus),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(response => {
          response.json().then(data => {
            console.log("Successful" + data);
          });
        });
        this.props.history.push("/InprogressTasks");
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
    this.state.updatedStatus = event.target.value;
  };


  renderTableData() {
    return this.state.orderList.map((response) => {
       const { id, priority, description, status, startDate} = response

        return (
            <tr key={id}>
              <td>{id}</td>
              <td>{priority}</td>
              <td>{description}</td>
              <td>{startDate}</td>
              <td>
                <select
                    className="form-control"
                    id="status"
                    value={this.state.value}
                    onChange={this.onInputChange}
                    aria-describedby="statusHelp"
                    placeholder="Update Status"
                >
                    <option value="default" defaultValue>
                        Select
                    </option>
                    <option value="IN PROGRESS">IN PROGRESS</option>
                </select>
            </td>
            <td><button className="btn btn-default btn-light" onClick={() => this.updateStatus(id)}>
                Open Case
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
          <h1>Pending Orders List</h1>
          <table class="table table-bordered table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Priority</th>
                <th scope="col">Description</th>
                <th scope="col">Start Date</th>
                <th scope="col">Status</th>
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
                  <Link className="btn btn-primary btn-lg" to='/InProgressTasks'>Open Tasks</Link>
                </td>
                <td>
                  <Link className="btn btn-primary btn-lg" to='/Technician'>My Dashboard</Link>
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


export default withRouter(TechOrderList);
