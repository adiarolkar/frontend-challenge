import React, { Component } from "react";
import request from 'axios';
import _ from 'lodash';

class Season extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonList: []
    };
  }
  getSeasonData(nextProps) {
    var self = this;
    var seasonList = _.cloneDeep(this.state.seasonList);
    var url = "http://ergast.com/api/f1/" + nextProps.selectedYear + "/results/1.json";
    var newReq = request({
      method: 'GET',
      url: url,
      responseType: 'json',
    })
      .then((res) => {
        var seasonTable  = res.data.MRData.RaceTable.Races;
        console.log(seasonTable);
        self.setState({
          seasonList: seasonTable
        });
      })
      .catch(console.warn);
  }

  createRaceCards() {
    var self = this;
    var raceYears = [];
    var champ = false;
    _.forEach(self.state.seasonList, function (item, i) {
      if (item.Results[0].Driver.driverId === self.props.champList[item.season]) {
        champ = true;
      } else {
        champ = false;
      }
      raceYears.push(
        <div className={champ? "champ" : ""} id={item} key={i} onClick={()=>this.getSeasonData(item.season)}>
            {item.Circuit.country}
            {item.Circuit.circuitName}
            {item.raceName}
            {item.date}
            {item.Results[0].Driver.givenName + ' ' + item.Results[0].Driver.familyName}
        </div>
      );
    });
    return(raceYears);
  }
  componentDidMount() {
    this.getSeasonData(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.getSeasonData(nextProps);
  }
  render() {
      return (
        <div>
          {this.createRaceCards()}
        </div>
      );
  }
}

export default Season;
