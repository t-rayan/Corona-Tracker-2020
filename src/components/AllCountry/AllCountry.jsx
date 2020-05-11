import React, { useState, useEffect } from "react";
import styles from "../AllCountry/AllCountry.module.css";
import * as ReactBootstrap from "react-bootstrap";
import { fetchAllCountry } from "../../api/index";
import Loader from "../Loader/Loader";

import cx from "classnames";

const AllCountry = () => {
  const [allCountry, setAllCountry] = useState([]);

  //useEffect hook
  useEffect(() => {
    const fetchApi = async () => {
      setAllCountry(await fetchAllCountry());
    };
    fetchApi();
  }, []);

  const renderCountry = (allCountry, index) => {
    if (allCountry) {
      return (
        <tr key={index}>
          <td>{allCountry.Country}</td>
          <td>{allCountry.TotalConfirmed}</td>
          <td>{allCountry.NewConfirmed}</td>
          <td>{allCountry.TotalRecovered}</td>
          <td>{allCountry.TotalDeaths}</td>
        </tr>
      );
    }
  };

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
      <div className={cx(styles.mycustomscrollbar, styles.tableWrapperScrolly)}>
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
            {allCountry ? allCountry.map(renderCountry) : <Loader />}
          </tbody>
        </ReactBootstrap.Table>
      </div>
    </div>
  );
};
export default AllCountry;
