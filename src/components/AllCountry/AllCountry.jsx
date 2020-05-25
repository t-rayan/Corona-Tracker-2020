import React, { useState, useEffect } from "react";
import styles from "../AllCountry/AllCountry.module.css";
import * as ReactBootstrap from "react-bootstrap";
import { fetchAllCountry } from "../../api/index";
import Loader from "../Loader/Loader";
import { Consumer } from "../../Context";

import cx from "classnames";

const AllCountry = () => {
  return (
    <Consumer>
      {(value) => {
        const { allCountries_data } = value;
        return (
          <div className="countryPicker">
            <div className="d-flex justify-content-between">
              <p className={styles.title}>All countries data</p>
              <div className={styles.searchContainer}>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className={cx(styles.searchInput, "form-control")}
                      placeholder="Search country"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div
              className={cx(
                styles.mycustomscrollbar,
                styles.tableWrapperScrolly
              )}
            >
              <ReactBootstrap.Table className="table table-hover table-borderless">
                <thead className={cx("thead-dark", styles.theadDark)}>
                  <tr>
                    <th scope="col">Country</th>
                    <th scope="col">Total Cases</th>
                    <th scope="col">New Cases</th>
                    <th scope="col">Recovered</th>
                    <th scope="col">Total Deaths</th>
                  </tr>
                </thead>
                <tbody>
                  {allCountries_data?.map((all, i) => (
                    <tr key={i}>
                      <td>{all.Country}</td>
                      <td>{all.TotalConfirmed}</td>
                      <td>{all.NewConfirmed}</td>
                      <td>{all.TotalRecovered}</td>
                      <td>{all.TotalDeaths}</td>
                    </tr>
                  ))}
                </tbody>
              </ReactBootstrap.Table>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};
export default AllCountry;
