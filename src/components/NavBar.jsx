import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.refresh = this.refresh.bind(this);
    }
    refresh() {
      location.reload();
    }
    render() {
        return (
            <div className="navbar">
                <div className="header">
                  <div className="container parentfloat">
                    <div className="logo left">
                      <h2 className="click" onClick={()=>this.refresh()}>F1 World Champions</h2>
                    </div>
                    <div className="right">
                      <a className="link" href="https://fincompare.de/">
                        FinCompare
                      </a>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
