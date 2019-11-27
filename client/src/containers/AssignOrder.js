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
        priority: [],
        description: "",
        technicianList: []
      },
      priorityOptions: ["Low", "High", "Urgent", "Cosmetic"]
    };
    this.validator = new SimpleReactValidator();
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  getTechniciansList = async () => {
    let URL = "http://localhost:8080/api/getTechnicians";
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
          <option key={data.id}>{data.firstName + " " + data.lastName}</option>
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

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newOrder: {
          ...prevState.newOrder,
          description: value
        }
      }),
      () => console.log(this.state.newOrder)
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newOrder.priority.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newOrder.priority.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newOrder.priority, newSelection];
    }

    this.setState(prevState => ({
      newOrder: { ...prevState.newOrder, priority: newSelectionArray }
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let orderData = this.state.newOrder;
    console.log("Inside Handle Submit");
    if (this.validator.allValid()) {
      alert("You submitted the form");
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
    fetch("https://cors-anywhere.herokuapp.com/http://example.com", {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
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

  render() {
    return (
      <div>
        <div className="content" id="content">
          <h2>Assign Work Order</h2>
        </div>
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Input
            inputType={"text"}
            title={"OrderId"}
            name={"name"}
            value={this.state.newOrder.orderId}
            placeholder={"Order Id"}
            disabled={true}
          />
          <p>
            {this.validator.message(
              "orderId",
              this.state.orderId,
              "required|alpha"
            )}
          </p>
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
          <CheckBox
            title={"Priority"}
            name={"priority"}
            options={this.state.priorityOptions}
            selectedOptions={this.state.newOrder.priority}
            handleChange={this.handleCheckBox}
          />
          <TextArea
            title={"Description"}
            rows={10}
            value={this.state.newOrder.description}
            name={"currentPetInfo"}
            handleChange={this.handleTextArea}
            placeholder={"Describe your issue"}
          />
          <p>
            {this.validator.message(
              "description",
              this.state.description,
              "required|alpha"
            )}
          </p>
          <Button
            action={this.handleFormSubmit}
            type={"primary"}
            title={"Submit"}
            style={buttonStyle}
          />

          <Button
            action={this.handleClearForm}
            type={"secondary"}
            title={"Clear"}
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
