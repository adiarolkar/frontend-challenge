import React, { Component } from "react";

class PageWrapper extends Component {
    render() {
        return (
            <div className="f1results">
                {this.props.children}
            </div>
        );
    }
}

export default PageWrapper;
