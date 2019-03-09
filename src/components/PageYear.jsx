import React, { Component } from "react";
import request from 'axios';
import _ from 'lodash';
import Season from './Season.jsx';
import Loader from './Loader.jsx';

const seasonsList = "http://ergast.com/api/f1/seasons.json?limit=40&offset=40";
const champAPI = "http://ergast.com/api/f1/driverStandings/1.json?limit=11&offset=55"

class PageYear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearList: [],
      isSeasonDataVisible: false,
      selectedYear: '',
      champList: {},
      isLoader: false
    };
    this.getSeasonData = this.getSeasonData.bind(this);
  }
  getYearList() {
    this.setState({
      isLoader: true
    });
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
          yearList,
          isLoader: false
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
        self.setState({
          champList: champListObj
        });
      })
      .catch(console.warn);
  }
  getSeasonData(year) {
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
        <div id={(self.state.selectedYear === item.season)? 'activeyear' : item.season} className="year" key={i} onClick={()=>self.getSeasonData(item.season)}>
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
          <div className="row">
            <div className="col-3 years">
              {this.createYearCards()}
              {this.state.isLoader &&
                <Loader
                  dark={false}
                  />
              }
            </div>
            <div className="col-9 races">
              {this.state.isSeasonDataVisible &&
                <Season
                  champList={this.state.champList}
                  selectedYear={this.state.selectedYear}
                  />
                }
              {!this.state.isSeasonDataVisible &&
                <div>
                  <div className="textbox center-text m-t-30">
                    <h2>Welcome!!</h2>
                    <h3 className="m-t-20">Take a look at the F1 Results from the year 2005 to 2015</h3>
                  </div>
                </div>
              }
            </div>
          </div>

        </div>
      );
  }
}

export default PageYear;
