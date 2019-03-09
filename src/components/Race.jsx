import React, { Component } from "react";
import request from 'axios';
import _ from 'lodash';

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

class Race extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  formatDate() {
    var date = this.props.raceDetails.date.split("-");
    var formattedDate = date[2] + " " + months[parseInt(date[1]) - 1];
    return formattedDate;
  }

  render() {
      return (
        <tr className={this.props.active? "active": ''}>
          <th scope="row">{this.props.itemNo + 1}</th>
          <td>{this.props.raceDetails.Results[0].Driver.givenName + ' ' + this.props.raceDetails.Results[0].Driver.familyName}</td>
          <td>{this.props.raceDetails.raceName}</td>
          <td>{this.props.raceDetails.Circuit.Location.locality}</td>
          <td>{this.props.raceDetails.Circuit.circuitName}</td>
          <td>{this.formatDate()}</td>
        </tr>
      );
  }
}

export default Race;
