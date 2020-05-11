import React from "react";
import {
  Cards,
  LineChart,
  DoughnutChart,
  AllCountry,
  CountryPicker,
} from "../../components";
import { Consumer } from "../../Context";
import styles from "../Layout/Index.module.css";
import Loader from "../Loader/Loader";

const Index = () => {
  return (
    <Consumer>
      {(value) => {
        const isEmpty = (obj) => {
          for (let key in obj) {
            if (obj.hasOwnProperty(key)) return false;
          }
          return true;
        };
        console.log(value);

        const { global_data } = value;
        const isTrue = isEmpty(global_data);

        //console.log(Object.values(value));

        if (isTrue) {
          return <Loader />;
        }

        return (
          <React.Fragment>
            <div className={styles.global}>
              <div className={styles.globalContainer}>
                <Cards />
                <LineChart />
                <DoughnutChart />
              </div>
            </div>
            <div className={styles.countryData}>
              <div className={styles.countryContainer}>
                <CountryPicker />
                <AllCountry />
              </div>
            </div>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};
export default Index;
