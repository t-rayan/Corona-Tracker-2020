import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import {
  Cards,
  LineChart,
  DoughnutChart,
  Header,
  Sidebar,
  Spinner,
  CountryPicker,
} from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
export default class App extends Component {
  state = {
    globalData: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ globalData: fetchedData });
  }
  render() {
    const { globalData } = this.state;

    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.global}>
          <p className={styles.title}>Global Status</p>
          <div className={styles.globalContainer}>
            <Cards data={globalData} />
            <LineChart />
            <DoughnutChart />
          </div>
        </div>
        <div className={styles.countryData}>
          <div className={styles.countryContainer}>
            <CountryPicker />
          </div>
        </div>
      </div>
    );
  }
}
