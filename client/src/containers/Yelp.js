import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';
import { Link, withRouter } from "react-router-dom";


class Yelp extends React.Component{
componentDidMount() {
    if (!window.doBuild) {
        this.preloadWidgetScript();
    } else {
        window.doBuild();
    }
    }
    
preloadWidgetScript = () => {
    const script = document.createElement("script");
    script.async = true;
    script.dataset.pinBuild = "doBuild";
    script.src = "//www.yelp.com/embed/widgets.js";
    document.body.appendChild(script);
};
   
    render() {
        return (
        <div className="container">
        <span
            className="yelp-review"
            data-review-id="CPZ43GwBDsLfZLaBpDPxFQ"
            data-hostname="www.yelp.com"
        >
            <a
            href="https://www.yelp.com/user_details?userid=nQjhEXRd9n1vON50NZnOCA"
            rel="nofollow noopener"
            >
            Jeff H.
            </a>

            <a
            href="https://www.yelp.com/biz/gtr-high-performance-rancho-cucamonga?hrid=CPZ43GwBDsLfZLaBpDPxFQ"
            rel="nofollow noopener"
            >
            review
            </a>

            <a
            href="https://www.yelp.com/biz/xqUYSbS_GP3TKK3ooYgpNA"
            rel="nofollow noopener"
            >
            GTR High Performance
            </a>
            <a href="https://www.yelp.com" rel="nofollow noopener">
            Yelp
            </a>
        </span>
        </div>
);
    }
}

export default withRouter(Yelp);
