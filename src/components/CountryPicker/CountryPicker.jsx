import React from "react";
import styles from "../CountryPicker/CountryPicker.module.css";
import { Consumer } from "../../Context";

const CountryPicker = () => {
  const pStyle = {
    fontSize: ".8rem",
    color: "#a37827",
  };

  return (
    <Consumer>
      {(value) => {
        return (
          <div className="country-picker">
            <div className="header">
              <p>Cases per country</p>
            </div>
            <div className="info mt-4">
              <p style={pStyle}>Total Cases: 11200</p>
              <p style={pStyle}>Total Deaths: 500</p>
              <p style={pStyle}>Total Recovered: 700</p>
              <p style={pStyle}>New Confirmed: 400 </p>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};
export default CountryPicker;
