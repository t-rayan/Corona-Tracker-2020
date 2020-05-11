import React, { Component } from "react";
import {
  fetchGlobalData,
  fetchWeeklyData,
  fetchTopCountryData,
  fetchAllCountry,
} from "../src/api/index";

//creating context
const Context = React.createContext();

export class Provider extends Component {
  //intialzing global state
  state = {
    global_data: {},
    weeklyGlobal_data: [],
    topCountries_data: [],
    allCountries_data: [],
  };

  async componentDidMount() {
    const gData = await fetchGlobalData();
    const wgData = await fetchWeeklyData();
    const tcData = await fetchTopCountryData();
    const acData = await fetchAllCountry();
    this.setState({
      global_data: gData,
      weeklyGlobal_data: wgData,
      topCountries_data: tcData,
      allCountries_data: acData,
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
