import React from "react";
// import styles from "../CountryPicker/CountryPicker.module.css";
import { Consumer } from "../../../Context";
import * as ReactBootstrap from "react-bootstrap";

const CountryPicker = ({ handleCountryChange }) => {
  //style
  const dropdownStyle = {
    height: "auto",
    maxHeight: "300px",
    overflowX: "hidden",
  };

  return (
    <Consumer>
      {(value) => {
        const { countries_list } = value;
        return (
          <div className="selectCountry">
            <ReactBootstrap.Dropdown>
              <ReactBootstrap.Dropdown.Toggle
                variant="primary"
                id="dropdown-basic"
                size="sm"
              >
                Country
              </ReactBootstrap.Dropdown.Toggle>

              <ReactBootstrap.Dropdown.Menu
                style={dropdownStyle}
                onClick={(e) => {
                  handleCountryChange(e.target.text);
                }}
              >
                {countries_list.map((country, i) => (
                  <ReactBootstrap.Dropdown.Item key={i} value={country}>
                    {country}
                  </ReactBootstrap.Dropdown.Item>
                ))}
              </ReactBootstrap.Dropdown.Menu>
            </ReactBootstrap.Dropdown>
          </div>
        );
      }}
    </Consumer>
  );
};
export default CountryPicker;
