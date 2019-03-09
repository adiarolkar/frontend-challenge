import React, { Component } from "react";
import request from 'axios';
import Race from './Race.jsx';
import _ from 'lodash';
import Loader from './Loader.jsx';

class Season extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonList: []
    };
  }
  getSeasonData(nextProps) {
    this.setState({
      seasonList: []
    });
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
        <Race
          active={champ? true : false}
          key={i}
          itemNo={i}
          onClick={()=>this.getSeasonData(item.season)}
          raceDetails={item}
        />
      );
    });
    return(raceYears);
  }
  componentDidMount() {
    this.getSeasonData(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.selectedYear !== this.props.selectedYear) {
      this.getSeasonData(nextProps);
    }
  }
  render() {
      return (
        <div>
        {this.state.seasonList.length?
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Driver</th>
                <th scope="col">Race</th>
                <th scope="col">City</th>
                <th scope="col">Circuit</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {this.createRaceCards()}
            </tbody>
          </table>
          :
          <Loader
            dark={true}
            />
        }
        </div>
      );
  }
}

export default Season;
