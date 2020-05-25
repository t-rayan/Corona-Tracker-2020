import React, { Component } from "react";
import { Consumer } from "../../Context";
import CountryPicker from "../CountryDetails/CountryPicker/CountryPicker";
import axios from "axios";
import Details from "../CountryDetails/Details/Details";
import BarChart from "../CountryDetails/BarChart/BarChart";

export default class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      confirmed: "",
      deaths: "",
      recovered: "",
    };
  }
  componentDidMount() {
    // this.autoCountryChange();
    this.handleCountryChange("Nepal");
  }
  autoCountryChange = async () => {
    const selectedCountry = "Nepal";
    const url = "https://covid19.mathdro.id/api/countries/";
    const { data } = await axios.get(url + "Nepal");

    this.setState({
      country: selectedCountry,
      confirmed: data.confirmed.value,
      deaths: data.deaths.value,
      recovered: data.recovered.value,
    });
  };

  handleCountryChange = async (country) => {
    const selectedCountry = country;
    const url = "https://covid19.mathdro.id/api/countries/";
    const { data } = await axios.get(url + country);

    this.setState({
      country: selectedCountry,
      confirmed: data.confirmed.value,
      deaths: data.deaths.value,
      recovered: data.recovered.value,
    });
  };

  render() {
    const isDetails = this.state.confirmed;

    return (
      <div className="countryDetails">
        <div className="header d-flex justify-content-between  align-items-center align-content-center">
          <p>Cases per country</p>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </div>

        {isDetails && <BarChart data={this.state} />}
      </div>
    );
  }
}
