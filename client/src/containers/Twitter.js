import React, { Component } from "react";

/* Import Components */
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Link, withRouter } from "react-router-dom";
import FormErrors from './Validation/FormErrors';
import ValidateForm from './Validation/ValidateForm';


class Twitter extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="row">
            <div className="container">
                <div className="col-md-5">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h2 className="panel-title"><i className="fa fa-twitter-square" aria-hidden="true"></i>
                                Follow us on Twitter
                            </h2>
                        </div>
                        <div className="panel-body tw-align-center">
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="SimpliRental"
                                options={{height: 800}}
                                
                            /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>	   
        </React.Fragment>
      );
  }
}


export default withRouter(Twitter);
