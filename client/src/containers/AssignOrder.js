import React, { Component } from "react";

/* Import Components */
import CheckBox from "../components/CheckBox";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";
import Manager from "../Manager";
import Technician from "../Technician";
import Dashboard from "../Dashboard";
import SimpleReactValidator from "simple-react-validator";
import { Link, withRouter } from "react-router-dom";

class AssignOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newOrder: {
        orderId: "",
        technician: "",
        priority: "",
        description: "",
        technicianList: [],
        selectedTechnician: "",

      },
    };
    this.validator = new SimpleReactValidator();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
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

  componentDidMount() {
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

  handleInput(e) {
    let value = e.target.value;
    let orderId = e.target.orderId;
    this.setState(
      prevState => ({ newOrder: { ...prevState.newOrder, [orderId]: value } }),
      () => console.log(this.state.newOrder)
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log("Inside Load function : " + JSON.stringify(this.props.current));
    let orderData = this.state.newOrder;
    let orderId = 7;
    let updateOrder = {
      technician: {
        id: this.state.selectedTechnician
      }
    };
    console.log("Inside Handle Submit");
    if (this.validator.allValid()) {
      console.log("You submitted the form");
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
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newOrder: {
        orderId: "",
        technician: "",
        priority: [],
        description: ""
      }
    });
  }

    onInputChange = event => {
      this.state.selectedTechnician = event.target.value;
    };

  render() {
    return (
      <div>
        <div className="content" id="content">
          <h2>Assign Work Order</h2>
        </div>
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Input
            inputType={"text"}
            title={"Id"}
            name={"orderId"}
            value={this.orderId}
            placeholder={"Order Id"}
            disabled={true}
          />
          <label for="technician">Technician</label>
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
          <p>
            {this.validator.message(
              "technician",
              this.state.technician,
              "required|alpha"
            )}
          </p>
          <Input
            inputType={"text"}
            title={"Priority"}
            name={"priority"}
            value={this.priority}
            placeholder={"Priority"}
            disabled={true}
          />
          <Input
            inputType={"text"}
            title={"Description"}
            name={"description"}
            value={this.description}
            placeholder={"Description"}
            disabled={true}
          />
          <Button
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Submit"}
            style={buttonStyle}
          />
        </form>
      </div>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default withRouter(AssignOrder);
