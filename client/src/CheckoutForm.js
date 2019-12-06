import React, { Component } from 'react';
import { CardElement, injectStripe, Elements, StripeProvider } from 'react-stripe-elements';
import { Link, withRouter } from "react-router-dom";
import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement
  } from 'react-stripe-elements';
  
import FormErrors from './containers/Validation/FormErrors';
import ValidateForm from './containers/Validation/ValidateForm';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = { complete: false, amount:"" };
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
        ev.preventDefault();
        let token = await this.props.stripe.createToken({ name: "Name" });
        console.log("token" + JSON.stringify(token));
        console.log(this.state.amount);
        let response = await fetch("http://localhost:8081/payments/charge", {
            method: "POST",
            mode: 'no-cors',
            headers: { "Content-Type": "text/plain", "token": token.id, "amount": this.state.amount },
            body: token.id
        }).then(response => {
            console.log("success" + JSON.stringify(response))
            alert("Payment is successful");
        });

        //if (response.ok) console.log("Purchase Complete!")
    }

    onInputChange = event => {
        this.setState({
         amount : event.target.value
        });
        
    }
    render() {
        
        return (
        <div>
            <div className="container">
                <h2 style={{marginTop: '30px'}} className="text-center">Pay your Bills</h2>
                
                <div class="d-flex justify-content-center align-items-center container">
                    <form className="container-fluid">
                        <div className="row">
                            <div className="cardsection">
                                <label for="number">
                                    Amount
                                </label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="number"
                                    aria-describedby="numberHelp"
                                    placeholder="Enter Amount"
                                    onChange={this.onInputChange}
                                />
                            </div>
                        </div>
                        <div className="cardsection">
                            <p className="cardsection">Enter your card details to pay rent</p>
                            <CardElement /> 
                            <button className="btn btn-primary btn-lg" onClick={this.submit}>Pay</button>
                        </div>
                        <div className="container-fluid">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Link className="btn btn-primary btn-lg" to='/Dashboard'>My Dashboard</Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    </form>
                 </div>
            </div>
        </div>
);
    }
}

export default injectStripe(CheckoutForm); 