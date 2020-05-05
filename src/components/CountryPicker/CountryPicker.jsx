import React from "react";
import styles from "../CountryPicker/CountryPicker.module.css";

import {
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

const CountryPicker = () => {
  return (
    <div className="countryPicker">
      <div className="d-flex justify-content-between">
        <p>Cases per Country</p>
        <p>Search Bar</p>
      </div>
      <div className="bg-white rounded shadow-lg p-3">
        <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Country</th>
              <th scope="col">Total Cases</th>
              <th scope="col">New Cases</th>
              <th scope="col">Recovered</th>
              <th scope="col">Total Deaths</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>USA</th>
              <td>7894879034</td>
              <td>90389</td>
              <td>6347893</td>
              <td>73833333</td>
            </tr>
            <tr>
              <th>Nepal</th>
              <td>7894879034</td>
              <td>90389</td>
              <td>6347893</td>
              <td>73833333</td>
            </tr>
            <tr>
              <th>China</th>
              <td>7894879034</td>
              <td>90389</td>
              <td>6347893</td>
              <td>73833333</td>
            </tr>
            <tr>
              <th>Germany</th>
              <td>7894879034</td>
              <td>90389</td>
              <td>6347893</td>
              <td>73833333</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CountryPicker;
