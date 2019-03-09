import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
    }
    refresh() {
      location.reload();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark header">
              <div className="navbar-collapse">
                <h2 className="click navbar-brand" onClick={()=>this.refresh()}>F1 World Champions</h2>
              </div>
              <span className="navbar-text">
                <a className="nav-item nav-link active" href="https://fincompare.de/">FinCompare</a>
              </span>
            </nav>
        );
    }
}

export default NavBar;
