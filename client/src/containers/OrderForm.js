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

class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        address: "",
        priority: [],
        description: ""
      },
      priorityOptions: ["Low", "High", "Urgent", "Cosmetic"]
    };
    this.validator = new SimpleReactValidator();
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({ newUser: { ...prevState.newUser, name: value } }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({ newUser: { ...prevState.newUser, [name]: value } }),
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          description: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.priority.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.priority.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.priority, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, priority: newSelectionArray }
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    let workOrder = {
      userid: "1",
      description: this.state.newUser.description,
      priority: "High",
      aptNum: this.state.newUser.address
    };
    console.log("Inside Handle Submit");
    if (this.validator.allValid()) {
      fetch("http://localhost:8080/api/createWorkOrder", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(workOrder)
        // mode: 'no-cors'
      }).then(response => {
        console.log("Successful" + response);
      });
      console.log("You submitted the form");
    } else {
      console.log("inside else");
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        address: "",
        priority: [],
        description: ""
      }
    });
  }

  render() {
    return (
      <div>
        <div className="content" id="content">
          <h2>Customer Order</h2>
        </div>
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Input
            inputType={"text"}
            title={"Full Name"}
            name={"name"}
            value={this.state.newUser.name}
            placeholder={"Enter your name"}
            handleChange={this.handleInput}
          />
          <p>
            {this.validator.message("name", this.state.name, "required|alpha")}
          </p>
          <Input
            inputType={"text"}
            title={"Address"}
            name={"address"}
            value={this.state.newUser.address}
            placeholder={"Enter your address"}
            handleChange={this.handleInput}
          />
          <p>
            {this.validator.message(
              "address",
              this.state.address,
              "required|alpha"
            )}
          </p>
          <CheckBox
            title={"Priority"}
            name={"priority"}
            options={this.state.priorityOptions}
            selectedOptions={this.state.newUser.priority}
            handleChange={this.handleCheckBox}
          />
          <TextArea
            title={"Description"}
            rows={10}
            value={this.state.newUser.description}
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

export default withRouter(OrderForm);
