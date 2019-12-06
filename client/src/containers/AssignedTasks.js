import React, { Component } from "react";

/* Import Components */
import { Link, withRouter } from "react-router-dom";
import FormErrors from './Validation/FormErrors';
import ValidateForm from './Validation/ValidateForm';
import AssignOrder from './AssignOrder';


class AssignedTasks
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
       orderList : [],
       technician: "",
       technicianList: [],
       selectedTechnician: ""
   }
  }

  componentWillMount() {
    this.getData();
  }

 handleChange(event) {
    this.setState({value: event.target.value});
  }

  getData = async () => {
    let URL = "http://18.224.193.99:8080/api/getAssignedWorkOrders";
    fetch(URL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          orderList: response
        });
        console.log("Assigned Order List" + JSON.stringify(this.state.orderList));
      });
    console.log("After Fetch");
  };

 onInputChange = event => {
    this.state.selectedTechnician = event.target.value;
  };


  renderTableData() {
    return this.state.orderList.map((response) => {
       const { id, priority, description, status, startDate, technician } = response

        return (
            <tr key={id}>
              <td>{id}</td>
              <td>{priority}</td>
              <td>{description}</td>
              <td>{status}</td>
              <td>{startDate}</td>
              <td>{technician.firstName} {technician.lastName}</td>
            </tr>
        )
    })
  }


 render () {
    return (
      <form>
      <div className="container">
        <div className="container-fluid">
          <h1>Assigned Orders List</h1>
          <table class="table table-bordered table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Priority</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">Start Date</th>
                <th scope="col">Technician</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
        <div className="container-fluid">
          <table class="table table-borderless">
            <tbody>
              <tr>
                <td>
                  <Link className="btn btn-primary btn-lg" to='/MgrOrderList'>Assign Task</Link>
                </td>
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


export default withRouter(AssignedTasks);
