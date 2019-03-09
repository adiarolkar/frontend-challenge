import React, { Component } from "react";
import PageYear from './PageYear.jsx';

class MainPage extends Component {
    render() {
        return (
            <div className="MainPage">
              <div className="cards">
                <PageYear/>
              </div>
            </div>
        );
    }
}

export default MainPage;
