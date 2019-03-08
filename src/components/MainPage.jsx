import React, { Component } from "react";
import PageYear from './PageYear.jsx';

class MainPage extends Component {
    render() {
        return (
            <div className="MainPage container">
              <div className="textbox center-text m-t-30">
                <h2>Welcome!!</h2>
                <h3 className="m-t-20">Begin your Sports Poll Journey here!!</h3>
                <h4 className="m-t-20">Please Vote Below:</h4>
              </div>
              <div className="cards m-t-30">
                <PageYear/>
              </div>
            </div>
        );
    }
}

export default MainPage;
