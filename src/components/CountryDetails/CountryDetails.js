import React, { Component } from "react";
import CountryPicker from "../CountryDetails/CountryPicker/CountryPicker";
import axios from "axios";
import BarChart from "../CountryDetails/BarChart/BarChart";
import styles from "./CountryDetails.module.css";

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
    this.detectCountry();
  }
  //getting current country
  detectCountry = async () => {
    const { data } = await axios.get("http://ip-api.com/json");
    this.setState({
      country: data.country,
    });
  };
  autoCountryChange = async () => {
    const url = "https://covid19.mathdro.id/api/countries/";
    const { data } = await axios.get(url + this.state.country);

    this.setState({
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
        <div className={styles.header}>
          <p className={styles.title}>Cases per country</p>
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </div>

        {isDetails && <BarChart data={this.state} />}
      </div>
    );
  }
}
