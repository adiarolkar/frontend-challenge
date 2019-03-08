import React, { Component } from "react";
import request from 'axios';
import _ from 'lodash';
import Season from './Season.jsx'

const seasonsList = "http://ergast.com/api/f1/seasons.json?limit=40&offset=40";
const champAPI = "http://ergast.com/api/f1/driverStandings/1.json?limit=11&offset=55"

class PageYear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearList: [],
      isSeasonDataVisible: false,
      selectedYear: '',
      champList: {}
    };
    this.getSeasonData = this.getSeasonData.bind(this);
  }
  getYearList() {
    var self = this;
    var yearList = _.cloneDeep(this.state.yearList);
    var newReq = request({
      method: 'GET',
      url: seasonsList,
      responseType: 'json',
    })
      .then((res) => {
        var seasonTable  = res.data.MRData.SeasonTable.Seasons;
        seasonTable.map(function(seasYears) {
          if (parseInt(seasYears.season) > 2004 && parseInt(seasYears.season) < 2016) {
            yearList.push(seasYears);
          }
        });
        self.setState({
          yearList
        });
      })
      .catch(console.warn);
  }
  getChampion() {
    var self = this;
    var champListObj = _.cloneDeep(this.state.champList);
    var url = champAPI
    var newReq = request({
      method: 'GET',
      url: url,
      responseType: 'json',
    })
      .then((res) => {
        var champList  = res.data.MRData.StandingsTable.StandingsLists;
        _.forEach(champList, function (item, i) {
          champListObj[item.season] = item.DriverStandings[0].Driver.driverId;
        });
        console.log(champListObj);
        self.setState({
          champList: champListObj
        });
      })
      .catch(console.warn);
  }
  getSeasonData(year) {
    console.log(year);
    this.setState({
      selectedYear: year,
      isSeasonDataVisible: true
    });
  }
  createYearCards() {
    var self = this;
    var raceYears = [];
    _.forEach(self.state.yearList, function (item, i) {
      raceYears.push(
        <div id={item.season} key={i} onClick={()=>self.getSeasonData(item.season)}>
          {item.season}
        </div>
      );
    });
    return(raceYears);
  }
  componentDidMount() {
    this.getChampion();
    this.getYearList();
  }
  render() {
      return (
        <div>
          {this.createYearCards()}
          {this.state.isSeasonDataVisible &&
            <Season
              champList={this.state.champList}
              selectedYear={this.state.selectedYear}
              />
            }
        </div>
      );
  }
}

export default PageYear;
