import React, { Component } from 'react';
import { CardElement, injectStripe, Elements, StripeProvider } from 'react-stripe-elements';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = { complete: false, amount:"" };
        this.submit = this.submit.bind(this);
    }

    async submit(ev) {
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
            alert("Payment is successful")
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

            <div className="example">
                <div className="form-group col-md-3">
                    <label for="number">
                        Amount
                </label>
                    <input
                        className="form-control"
                        type="text"
                        id="number"
                        aria-describedby="numberHelp"
                        placeholder="Enter Amount"
                        // value={this.state.number}
                        onChange={this.onInputChange}
                    />
                </div>
                <div className="checkout">
                    <p>Enter your card details to pay rent</p>
                    <CardElement />
                    <button onClick={this.submit}>Pay</button>
                </div>
            </div>

        );
    }
}

export default injectStripe(CheckoutForm); 