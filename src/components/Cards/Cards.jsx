import React from "react";
import Loader from "../Loader/Loader";
import styles from "../Cards/Cards.module.css";
// import CountUp from "react-countup";
import numFormatter from "../../helpers/formatter";
import { Consumer } from "../../Context";

import CaseIcon from "../../Icons/cases.svg";
import DeathIcon from "../../Icons/deaths.svg";
import RecoveredIcon from "../../Icons/recovered.svg";

import cx from "classnames";

export default function Cards() {
  return (
    <Consumer>
      {(value) => {
        console.log(value);

        const isEmpty = (obj) => {
          for (let key in obj) {
            if (obj.hasOwnProperty(key)) return false;
          }
          return true;
        };
        const { global_data } = value;
        const isTrue = isEmpty(global_data);

        if (isTrue) {
          return <Loader />;
        }
        return (
          <div className={styles.cardsContainer}>
            <div className={cx(styles.cards, styles.cardCase)}>
              <img src={CaseIcon} className={styles.icon} alt="" />
              <h6 className={styles.cardTitle}>Total Cases</h6>
              <p className={styles.cardText}>
                {numFormatter(global_data.TotalConfirmed)}
              </p>
            </div>
            <div className={cx(styles.cards, styles.cardDeaths)}>
              <img src={DeathIcon} className={styles.icon} alt="" />
              <h6 className={styles.cardTitle}>Total Deaths</h6>

              <p className={styles.cardText}>
                {numFormatter(global_data.TotalDeaths)}
              </p>
            </div>
            <div className={cx(styles.cards, styles.cardRecovered)}>
              <img src={RecoveredIcon} className={styles.icon} alt="" />
              <h6 className={styles.cardTitle}>Total Recovered</h6>
              <p className={styles.cardText}>
                {numFormatter(global_data.TotalRecovered)}
              </p>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

// const Cards = ({ data }) => {
//   if (!data) {
//     return <Loader />;
//   }
//   return (
//     <div className={styles.cardsContainer}>
//       <div className={styles.cards}>
//         <img src={CaseIcon} className={styles.icon} />
//         <h6 className={styles.cardTitle}>Total Cases</h6>
//         <p className={styles.cardText}>{numFormatter(data.TotalConfirmed)}</p>
//       </div>
//       <div className={styles.cards}>
//         <img src={DeathIcon} className={styles.icon} />
//         <h6 className={styles.cardTitle}>Total Deaths</h6>

//         <p className={styles.cardText}>{numFormatter(data.TotalDeaths)}</p>
//       </div>
//       <div className={styles.cards}>
//         <img src={RecoveredIcon} className={styles.icon} />

//         <h6 className={styles.cardTitle}>Total Recovered</h6>

//         <p className={styles.cardText}>{numFormatter(data.TotalRecovered)}</p>
//       </div>
//       <div className={styles.cards}>
//         <img src={NewCaseIcon} className={styles.icon} />

//         <h6 className={styles.cardTitle}>New Confirmed</h6>

//         <p className={styles.cardText}>{numFormatter(data.NewConfirmed)}</p>
//       </div>
//     </div>
//   );
// };
// export default Cards;
