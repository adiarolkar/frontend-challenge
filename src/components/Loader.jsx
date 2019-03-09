import React, { Component } from "react";

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }
  render() {
      return (
        <div className="center-text m-t-50">
          <div className={`spinner-border ${this.props.dark? 'text-dark' : 'text-light' }`} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
  }
}

export default Loader;
