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
import AssignOrder from './AssignOrder';

const orderPicked = "";
class PickOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newOrder: {
        orderId: "",
        orderList: [],
      }
    };
    this.validator = new SimpleReactValidator();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  getOrderList = async () => {
    let URL = "http://localhost:8080/api/getOrderId";
    fetch(URL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          orderList: response
        });
        console.log("json data is" + JSON.stringify(this.state.orderList));
      });
    console.log("after log");
  };

  componentDidMount() {
    this.getOrderList();
  }

  renderDropDown = () => {
    let arrayOfData = this.state.orderList;
    if (arrayOfData) {
      return arrayOfData.map(data => {
        return (
          <option key={data.id} value={data.id}>
            {data.orderId}
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
    let orderData = this.state.newOrder;
    let orderId = orderData.orderId;
   
    console.log("Inside Handle Submit");
    if (this.validator.allValid()) {
      //orderPicked = orderId;
      this.props.history.push("/AssignOrder");
      
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
  }

  onInputChange = event => {
    this.state.selectedorderId = event.target.value;
  };

  render() {
    return (
      <div>
        <div className="content" id="content">
          <h2>Select Work Order</h2>
        </div>
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          
          <label for="orderId">Order Number</label>
          <select
            className="form-control"
            id="orderId"
            value={this.state.value}
            onChange={this.onInputChange}
            aria-describedby="orderIdHelp"
            placeholder="Select Order"
          >
            <option value="default" defaultValue>
              Select
            </option>
            <option>Option 1</option>
            {this.renderDropDown()}
          </select>
          <p>
            {this.validator.message(
              "Order Id",
              this.state.orderId,
              "required|alpha"
            )}
          </p>
         
          <button className="btn btn-primary">
              Submit
            </button>
        </form>
      </div>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default withRouter(PickOrder);
